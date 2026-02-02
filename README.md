# 🧠 Online Quiz Application

An interactive **Online Quiz Application** built using **HTML, CSS, and JavaScript**. The application dynamically loads questions from an external file, randomly selects 20 questions on each start, evaluates answers in real time, and displays the final score.

---

## 🚀 Features

* 📄 Questions loaded from external `Question.txt` file
* 🔀 Random selection of **20 questions** on every quiz attempt
* ⚡ Real-time score calculation
* ✅ Instant feedback for correct and wrong answers
* 📊 Live question counter and score display
* 🔁 Restart quiz option
* 🎨 Clean and responsive UI

---

## 🛠️ Technologies Used

* **HTML** – Structure of the application
* **CSS** – Styling and responsive design
* **JavaScript (ES6)** – Quiz logic, DOM manipulation, and file handling

---

## 📁 Project Structure

```
online-quiz-application/
│── index.html      # Main HTML file
│── style.css       # Styling file
│── script.js       # Quiz logic (JavaScript)
│── Question.txt    # Question bank (100 MCQs)
│── README.md       # Project documentation
```

---

## 📄 Question File Format (`Question.txt`)

Each question follows this format:

```
Question | Option1 | Option2 | Option3 | Option4 | CorrectOptionIndex
```

Example:

```
What does HTML stand for? | Hyper Text Markup Language | High Text Machine Language | Hyperlinks Text Markup Language | None | 0
```

> **Note:** `CorrectOptionIndex` starts from `0` (zero-based indexing).

---

## ▶️ How to Run the Project

Because the project uses `fetch()` to load the question file, it must be run using a local server.

### ✅ Option 1: Using VS Code Live Server (Recommended)

1. Open the project folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click on `index.html` → **Open with Live Server**

### ✅ Option 2: Using XAMPP / WAMP

1. Place the project inside the `htdocs` folder
2. Start Apache server
3. Open browser and visit:

```
http://localhost/online-quiz-application/
```

---

## 🧪 How It Works

1. On page load, questions are fetched from `Question.txt`
2. 20 questions are randomly selected
3. User selects answers and receives instant feedback
4. Score is updated in real time
5. Final score is displayed at the end of the quiz

---

## 🎓 Academic Use

This project is suitable for:

* MCA / BCA / BSc IT Mini Project
* Web Development Practice
* JavaScript DOM & File Handling Demonstration

---

## 🔮 Future Enhancements

* ⏱️ Timer-based questions
* 👤 User login system
* 💾 Store scores using LocalStorage / Database
* 🧾 Detailed result analysis
* 🛠️ Admin panel to manage questions

---

## 👨‍💻 Author

**Developed by:** Lokesh Sahu
**Course:** BCA / Computer Applications

---

⭐ If you like this project, don’t forget to star the repository!
