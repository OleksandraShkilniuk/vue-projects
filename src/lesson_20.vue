<template>
  <div class="app">
    <h2>База студентів</h2>

    <ul>
      <li v-for="student in students"> <!-- TODO: реалізуйте відображення списку студентів тут через v-for -->
        {{ student.name }} - {{ student.score }} балів
      </li>
    </ul>

    <p>
      Середній бал стдентів:
      <span :class="{ green: isHigher === true, red: isHigher===false, none: isHigher === null }"> <!-- TODO: Змінюйте колір тексту, якщо середній бал збільшується - зелений, якщо ні - червоний -->
                {{ averageScore }} <!-- TODO: це обчислювальна властивість. Релізуйте код розрахунку у computed секції -->
                <span v-show="isHigher === null"></span>
                <span v-show="isHigher === true" class="up">&uArr;</span> <!-- TODO: Стрілка вгору. виводьте її коли середній бал збільшується -->
                <span v-show="isHigher === false" class="down">&dArr;</span><!-- TODO: Стрілка вниз. виводьте її коли середній бал зменшується -->

            </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
      isHigher: null,
    };
  },
  computed: {
    averageScore() {
      if(this.students.length === 0) {
        return 0
      }
        let averageSum = this.students.reduce((sum, student) => {
          return sum + student.score;
        }, 0); //TODO: figure out why there is a zero?
      let average = averageSum / this.students.length;

      // Use Math.round() to round to the nearest whole number
      return Math.round(average);
      // TODO: Реалізуйте розрахунок середнього балу всіх студентів.
    },

  },
  methods: {
    /*
     * Функція генерації нового студента. Тут змін не потрібно.
     */
    generateStudent() {
      let nameList = [
        'Time','Past','Future','Dev', 'Fly','Flying','Soar','Soaring','Power','Falling', 'Fall','Jump','Cliff',
        'Mountain','Rend','Red','Blue', 'Green','Yellow','Gold','Demon','Demonic','Panda','Cat', 'Kitty','Kitten',
        'Zero','Memory','Trooper','Bandit', 'Fear','Light','Glow','Tread','Deep','Deeper','Deepest', 'Mine','Your',
      ];

      return {
        id: (new Date()).getTime(),
        name: nameList[Math.floor( Math.random() * nameList.length )],
        score: Math.floor( Math.random() * 100)
      };
    },
  },
  watch: {
    averageScore(newScore, oldScore) {
      if (newScore > oldScore) {
        this.isHigher = true;
        console.log(this.isHigher)
      } else if (newScore < oldScore) {
        this.isHigher = false;
      } else {
        this.isHigher = null;
      }
    },
  },
  created() {
    /*
     * Це допоможе додавати нового студента у список кожні 5 секунд. Зміни не потрібні.
     * Уявимо, що ми не просто генеруємо рандомних студентів, а отримуємо результати по API з сервера.
     */
    setInterval(() => {
      this.students.push(this.generateStudent());
    }, 5000)
  }
};

</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  padding: 8px;
  font-size: 16px;
}

.green {
  color: green;
}

.red {
  color: red;
}

.none {
  color: black;
}

</style>