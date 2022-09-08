// The Supermarket Queue
function queueTime(customers, n) {
  //     let sort = customers.sort(function (a, b) {
  //         return a - b;
  //     });
      let bigEl = Math.max(...customers);
      if (customers.length < 1) {
        return 0
      } else if (customers.length < n) {
          return bigEl;
      } else {
          // 1. делаем массив пустых очередей
          let arrOfQueues = new Array(n).fill(0)
          for (let k = 0; k < customers.length; k++) {
              // найти индекс очереди с наименьше суммо элементов
              let minElofArr = arrOfQueues.indexOf(Math.min(...arrOfQueues));
              arrOfQueues[minElofArr] += customers[k]
          }
          // 3. выводим итоговую наибольшую сумму времени обслуживания очереди на одной из касс.
          return Math.max(...arrOfQueues);
      }
  }