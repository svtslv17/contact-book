<template>
  <form class="contact-form" @submit.prevent>
    <app-pop-up
      :show="isShownPopUpDelete"
      @yes="deleteField(deletedFieldKey)"
      @no="isShownPopUpDelete = false"
      >Remove field <strong>{{ deletedFieldKey }}</strong
      >?</app-pop-up
    >
    <app-pop-up
      :show="isShownPopUpReturn"
      @yes="returnFields()"
      @no="isShownPopUpReturn = false"
      >Return fields?</app-pop-up
    >
    <div class="fields">
      <div v-if="hasResetButtons && isChangedField">
        <app-button-deny @click="isShownPopUpReturn = true"
          >Return</app-button-deny
        >
        <app-button-deny
          v-if="lastChangedField !== ''"
          @click="returnLastChanges"
        >
          Step back
        </app-button-deny>
      </div>
      <div
        class="fields__item"
        v-for="(field, idx) in Object.entries(newContact)"
        :key="idx"
      >
        <div class="field" v-if="field[0] !== 'id'">
          <div>{{ field[0] }}:</div>
          <input
            type="text"
            :placeholder="field[1]"
            v-model="newContact[`${field[0]}`]"
            @change="isChangedField = true"
          />
          <app-button-deny
            v-if="field[0] !== 'name'"
            @click="induceDeletePopUp(field[0])"
          >
            Delete
          </app-button-deny>
        </div>
      </div>
      <div class="custom-field" v-for="(custom, idx) in customs" :key="idx">
        <input type="text" placeholder="Title" v-model="custom[0]" />
        :
        <input type="text" placeholder="Value" v-model="custom[1]" />
        <app-button-deny @click="removeCustom(idx)">
          Remove
        </app-button-deny>
      </div>
      <app-button class="custom-btn" @click="addCustom">
        Add custom field
      </app-button>
    </div>
    <the-save-button @click="saveContact"></the-save-button>
  </form>
</template>

<script>
export default {
  /**
   * @description Входные параметры формы контактной информации
   * @param {Object} contact Контакт
   * @param {Boolean} hasResetButtons Флаг наличия на форме кнопок управления изменениями контакта
   */
  props: {
    contact: {
      type: Object,
      required: true,
    },

    hasResetButtons: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  /**
   * @description Данные формы контактной информации
   * @param {Object} newContact Контакт который форма будет преобразовывать
   * @param {Array} customs Новые поля информации для контакта
   * @param {String} lastChangedField  Последнее редактируемое собственное поле контакта
   * @param {String} deletedFieldKey Имя ключа удаляемого поля из контакта
   * @param {Boolean} isChangedField Флаг изменения собственного поля
   * @param {Boolean} isShownPopUpDelete Флаг открытия модального окна удаления
   * @param {Boolean} isShownPopUpReturn Флаг открытия модального окна отмены изменений
   */
  data() {
    return {
      newContact: {},
      customs: [],
      lastChangedField: "",
      deletedFieldKey: "",
      isChangedField: false,
      isShownPopUpDelete: false,
      isShownPopUpReturn: false,
    };
  },
  /**
   * Устанавливает информацию из редактируемого контакта в новый экземпляр
   * и обнуляет поле измений
   */
  mounted() {
    this.newContact = Object.assign({}, this.contact);
    this.lastChangedField = "";
  },
  methods: {
    /**
     * Инициировать вызов модального окна удаления поля,
     * передавая имя ключа удаляемого поля контакта
     * @param {String} fieldKey Имя ключа удаляемого поля контакта
     */
    induceDeletePopUp(fieldKey) {
      this.deletedFieldKey = fieldKey;
      this.isShownPopUpDelete = true;
    },
    /**
     * Убрать новое поле добавляемое к информации контакта
     * @param {Number} id Id нового поля
     */
    removeCustom(id) {
      this.customs.splice(id, 1);
    },
    /**
     * Добавить новое поле добавляемое к информации контакта
     */
    addCustom() {
      this.customs.push(["", ""]);
    },
    /**
     * Удалить старое поле контакта
     * @param {String} fieldKey Имя ключа удаляемого поля контакта
     */
    deleteField(fieldKey) {
      delete this.newContact[fieldKey];
      this.deletedFieldKey = "";
      this.isShownPopUpDelete = false;
    },
    /**
     * Вернуть поля контакта в исходное состояние
     */
    returnFields() {
      this.newContact = Object.assign({}, this.contact);
      this.isShownPopUpReturn = false;
      this.isChangedField = false;
    },
    /**
     * Отмена последнего внесенного изменения в поле контакта
     */
    returnLastChanges() {
      this.newContact[this.lastChangedField] = this.contact[
        this.lastChangedField
      ];
    },
    /**
     * Сохранение готового обновленного/нового контакта в список контактов
     */
    saveContact() {
      let savedContact = {};
      /**
       * Проверка на наличие обязательного поля "name" у контакта
       * если контакт не назван, то изменения к контакту не применятся
       * и форма вернет контакт с исходной информацией
       */
      if (this.newContact.name === "") {
        this.customs = [];
        this.newContact = Object.assign({}, this.contact);
      }
      /**
       * Добавить id контакту если его нет
       */
      if (!this.newContact.id) {
        this.newContact.id = Date.now();
      }
      /**
       * Убрать пустые новые поля
       */
      this.customs = this.customs.filter((field) => field[0] !== "");
      /**
       * Объединение обновлений контакта и новых полей(при их наличии)
       * в готовый новый контакт
       */
      if (this.newContact !== {} && this.customs !== []) {
        savedContact = Object.fromEntries([
          ...Object.entries(this.newContact),
          ...this.customs,
        ]);
      } else if (this.customs === []) {
        savedContact = this.newContact;
      }
      /**
       * Передача сформированного контакта родительскому компоненту
       */
      this.$emit("saveContact", savedContact);
    },
  },
  computed: {
    /**
     * Оборачиваем предыдущее состояние контакта для работы watch-наблюдателя
     */
    computedNewContact: function() {
      return Object.assign({}, this.newContact);
    },
  },
  watch: {
    /**
     * Поиск измененных полей в контакте
     */
    computedNewContact: {
      handler(newC, oldC) {
        for (let field in oldC) {
          if (oldC[field] !== newC[field]) {
            this.lastChangedField = field;
          }
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.form-title {
  font-size: 20px;
  padding: 20px;
  width: 100%;
}
.contact-form,
.create-btn {
  padding: 15px;
  border: 1px solid rgb(218, 178, 145);
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
.create-btn {
  background-color: rgb(255, 227, 175);
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.create-btn__img {
  width: 20px;
  height: 20px;
  margin: 5px;
}
.custom-field,
.fields__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fields__item {
  width: 100%;
}
.field-title {
  margin-right: 10px;
}
.custom-field {
  display: flex;
  align-items: center;
}
.fields {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
input {
  margin: 5px;
}
.custom-btn {
  margin: 8px 0;
}
</style>
