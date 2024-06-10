import "./DayOfTheMonth.css";

export default function DayOfTheMonth() {
  const schedule = [
    27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <div className="day_container">
      {schedule.map((day, index) => (
        <div className="dayOfTheMonth" key={index}>
          {day}
        </div>
      ))}
    </div>
  );
}

// const schedule2 = [
//   {
//     day: 27,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 28,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 29,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 30,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 1,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 2,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 3,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 4,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 5,
//     message1: null,
//   },
//   {
//     day: 6,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 7,
//     message1: null,
//   },
//   {
//     day: 8,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 9,
//     message1: null,
//   },
//   {
//     day: 10,
//     message1: null,
//   },
//   {
//     day: 11,
//     message1: null,
//   },
//   {
//     day: 12,
//     message1: null,
//   },
//   {
//     day: 13,
//     message1: null,
//   },
//   {
//     day: 14,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 15,
//     message1: null,
//   },
//   {
//     day: 16,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 17,
//     message1: null,
//   },
//   {
//     day: 18,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 19,
//     message1: null,
//   },
//   {
//     day: 20,
//     message1: null,
//   },
//   {
//     day: 21,
//     message1: null,
//   },
//   {
//     day: 22,
//     message1: null,
//   },
//   {
//     day: 23,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
//   {
//     day: 24,
//     message1: null,
//   },
//   {
//     day: 25,
//     message1: null,
//   },
//   {
//     day: 26,
//     message1: null,
//   },
//   {
//     day: 27,
//     message1: null,
//   },
//   {
//     day: 28,
//     message1: null,
//   },
//   {
//     day: 29,
//     message1: null,
//   },
//   {
//     day: 30,
//     message1: null,
//   },
//   {
//     day: 31,
//     message1: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//     message2: {
//       time: "13:00-13:45",
//       subject: "Ментальная арифметика",
//     },
//   },
// ];
