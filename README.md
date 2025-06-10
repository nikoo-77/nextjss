I FORGOT TO LOGOUT THE ACCOUNT OF MY BROTHER IN VSCODE.. WHEN I COMMITED, ITS NAME APPEARED.

# React/Next.js Lajera Project

This project demonstrates fundamental concepts in React and Next.js, as well as basic JavaScript exercises for learning purposes.

## Features

### Next.js App (`/b/app`)
- **Welcome Card:** Interactive card where you can input your name and see a personalized greeting.
- **Student Info:** Form to input student ID, major, and year (no GPA), with real-time display.
- **Counter:** Simple increment/decrement counter.
- **Modern UI:** Responsive, dark mode support, and styled with Tailwind CSS.

### JavaScript Fundamentals (`/a`)
- **lajera.html & lajera.js:**  
  - **Variables, Functions, Arrays, and Objects:** See examples and output.
  - **DOM Manipulation:** Change and reset text on the page.
  - **Event Handling:** Button click updates a message.

## Getting Started

### Next.js App

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### JavaScript Fundamentals

1. Open `a/lajera.html` in your browser.
2. Interact with the sections to see JavaScript basics in action.

## File Structure

```
/a
  lajera.html      # JavaScript fundamentals exercises
  lajera.js        # Linked JS for DOM and event handling

/b
  app/
    components/
      WelcomeCard.tsx
      StudentInfo.tsx
      Counter.tsx
    page.tsx
    layout.tsx
    ...
  package.json
  ...
```

## Notes

- Make sure file names and imports match exactly (case-sensitive).
- If you encounter errors, restart your dev server and check for typos in file names and imports.

---
