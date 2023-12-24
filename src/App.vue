<template>
  <div>
    <h2>Flexbox Playground</h2>

<!--    justify content обробляємо подію "клік" і при ній запускаємо метод в'ю, який передає значення в змінну в даті-->

    <div class="container">
      <h4>Choose justify-content:</h4>
      <button @click="setJustifyContent('flex-start')" :class="{'pink-button' : justifyContent === 'flex-start'}">flex-start:</button>
      <button @click="setJustifyContent('flex-end')" :class="{'pink-button' : justifyContent === 'flex-end'}">flex-end:</button>
      <button @click="setJustifyContent('center')" :class="{'pink-button' : justifyContent === 'center'}">center:</button>
      <button @click="setJustifyContent('space-between')" :class="{'pink-button' : justifyContent === 'space-between'}">space-between:</button>
      <button @click="setJustifyContent('space-around')" :class="{'pink-button' : justifyContent === 'space-around'}">space-around:</button>
    </div>
    <!--    align items обробляємо подію "клік" і при ній запускаємо метод в'ю, який передає значення в змінну в даті-->

    <div class="container2">
      <h4>Choose align-items:</h4>
      <button @click="setAlignItems('align-flex-start')" :class="{'pink-button': alignItems === 'align-flex-start'}">flex-start:</button>
      <button @click="setAlignItems('align-flex-end')" :class="{'pink-button': alignItems === 'align-flex-end'}">flex-end:</button>
      <button @click="setAlignItems('align-center')" :class="{'pink-button': alignItems === 'align-center'}">center:</button>
      <button @click="setAlignItems('align-baseline')" :class="{'pink-button': alignItems === 'align-baseline'}">baseline:</button>
      <button @click="setAlignItems('align-stretch')" :class="{'pink-button': alignItems === 'align-stretch'}">stretch:</button>
    </div>

<!--   подія клік, якщо натискається кнопка, то значення змінної змінюється, якщо змінна тру, то текст буде Hide else Show -->
    <div>
      <button @click="isVisible = !isVisible">{{isVisible? 'Hide' : 'Show'}} code</button>

<!--      Цей код існує тільки якщо змінна - тру-->
      <p v-if="isVisible">
        display: flex;<br>
        justify-content: {{justifyContent}};<br>
        align-items: {{ alignItems.replace('align-', '') }};
      </p>
    </div>
<!--Блок з флексбоксом, де через змінні підставляється клас-->
    <div class="playground">
      <div :class="[justifyContent, alignItems]">
        <div class="color">First</div>
        <div class="color">Second</div>
        <div class="color">Third</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      isVisible: false,
    };
  },
  methods: {
    setJustifyContent(value) {
      this.justifyContent = value;
    },
    setAlignItems(value) {
      this.alignItems = value;
    }
  },
};
</script>

<style>

.pink-button {
  background-color: pink;
  color: white;
}
.container, .container2 {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-top: 20px;
  margin-bottom: 30px;
}

.playground {
  width: 1000px;
  height: 300px;
  border: 2px solid black;
}

.color {
  background-color: mediumpurple;
  color: white;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 60px;
}

.flex-start {
  display: flex;
  justify-content: flex-start;
  height: 100%;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.center {
  display: flex;
  justify-content: center;
  height: 100%;
}

.space-between {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.space-around {
  display: flex;
  justify-content: space-around;
  height: 100%;
}

/* Align items styles */
.align-flex-start {
  align-items: flex-start;
}

.align-flex-end {
  align-items: flex-end;
}

.align-center {
  align-items: center;
}

.align-baseline {
  align-items: baseline;
}

.align-stretch {
  align-items: stretch;
}

</style>
