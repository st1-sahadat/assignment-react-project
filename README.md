Assignment 5:
My project name :- assignment-react-project
Description     :- I am programing hero student. This crouse very fantastice but very fast.
                   very attentive to the course. I don't want to leave any stone unturned in my efforts. the rest in God.
Technology      :- React, inside(html, tailWind css, javaScript, typeScript, Toast)
Features        :- Create navbar, banner, json data fatch and excute result. map hook componant 
                   add. footer add (all requirements fullfil).



React question answer:
1. What is JSX, and why is it used in React?
Ans:- JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML, CSS, TailWind css like code directly inside your React files.
2. What is the difference between props and state?
Ans:- Props are used to pass data down from a parent component, While state is used to manage data locally within the component itself.
3. What does the useState hook do, and where did you use it in this project?
Ans:- Allows you to add state to a functional React component. I am Use this hook inside CardGrid.tsx
4. What does the useEffect hook do, and why did you need it to load the JSON data?
Ans:- The useEffect hook is a built-in React tool used to manage side effects in functional componants.
5. Why does every item in a .map() list need a unique key prop?
Ans:- so that React can identify which items have changed, been added, or been removed.
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans:-  show, hide, or change user interface elements based on specific application conditions or states. I am useing this condition, go to LanguageCard.tsx file frist div and scroll down end button.
  <!-- <div
      className={`w-full max-w-sm bg-white rounded-3xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between font-sans ${
        isSelected ? 'border border-[#0c0c0c]' : 'border border-slate-100'
      }`}>
      
       <button
          onClick={handleLan}
          disabled={isSelected}
          className="w-full font-medium text-sm py-3 rounded-2xl transition-colors duration-200 
             bg-[#5d7fcf] hover:bg-slate-800 text-white
             disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}          
        </button> -->
        
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans:- Parent to Child: Pass data as props.
      Child to Parent: Pass a callback function as a prop from the parent, then call that function inside the child with the data.