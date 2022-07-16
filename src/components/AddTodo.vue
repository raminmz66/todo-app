<template>
    <f7-block class="block" inset>
        <f7-list class="no-margin" inset form>
            <f7-list-input
                type="textarea"
                placeholder="Remember to ..."
                clear-button
                resizable
                v-model:value="text"
                autofocus
            >
            </f7-list-input>
        </f7-list>
        <f7-button class="button" @click="onAdd">
            <f7-icon f7="plus_circle_fill" size="32"></f7-icon>
        </f7-button>
    </f7-block>
</template>

<script>
export default {
  data() {
      return {
          text: ''
      }
  },
  methods: {
      onAdd() {
          this.$emit("add", { text: this.text });
          this.text = "";
          document.querySelector(".block textarea").style.height="var(--f7-input-height)";
          document.querySelector(".block textarea").focus();
      },
  }    
}
</script>

<style scoped>
 .block {
    display: flex;
    align-items: baseline;
    --f7-block-margin-vertical: 20px;
  }
  .block.inset {
    --f7-block-inset-side-margin: 5px;
  }
  .list {
    flex-grow: 1;
  }
  .list ::v-deep(textarea) {
    overflow: hidden;
    display: inline-block;
  }
  li {
    line-height: 1;
  }
  .button {
    position: relative;
    bottom: 10px;
    padding-right: 0;
  }
</style>