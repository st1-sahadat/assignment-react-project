Assignment 5:<br>
My project name :- assignment-react-project<br>
Description     :- I am programing hero student. This crouse very <br>fantastice but very fast.<br>
                   very attentive to the course. I don't want to leave <br>any stone unturned in my efforts. the rest in God.<br>
Technology      :- React, inside(html, tailWind css, javaScript, <br>typeScript, Toast)<br>
Features        :- Create navbar, banner, json data fatch and excute <br>result. map hook componant <br>
                   add. footer add (all requirements fullfil).<br>



React question answer:<br>
1. What is JSX, and why is it used in React?<br>
Ans:- JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML, CSS, TailWind css like code directly inside your React files.<br>
2. What is the difference between props and state?<br>
Ans:- Props are used to pass data down from a parent component, While state is used to manage data locally within the component itself.<br>
3. What does the useState hook do, and where did you use it in this project?<br>
Ans:- Allows you to add state to a functional React component. I am Use this hook inside CardGrid.tsx<br>
4. What does the useEffect hook do, and why did you need it to load the JSON data?<br>
Ans:- The useEffect hook is a built-in React tool used to manage side effects in functional componants.<br>
5. Why does every item in a .map() list need a unique key prop?<br>
Ans:- so that React can identify which items have changed, been added, or been removed.<br>
6. What is conditional rendering? Show one place you used it (example: the empty stack message).<br>
Ans:-  show, hide, or change user interface elements based on specific application conditions or states. I am useing this condition, go to LanguageCard.tsx file frist div and scroll down end button.<br>
  <div <br>
      className={`w-full max-w-sm bg-white rounded-3xl p-3 shadow-<br>[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between <br>font-sans ${<br>
        isSelected ? 'border border-[#0c0c0c]' : 'border <br>border-slate-100'<br>
      }`}><br>      
       <button<br>
          onClick={handleLan}<br>
          disabled={isSelected}<br>
          className="w-full font-medium text-sm py-3 rounded-2xl vtransition-colors duration-200 <br>
             bg-[#5d7fcf] hover:bg-slate-800 text-white<br>
             disabled:bg-slate-300 disabled:text-slate-500 <br>disabled:cursor-not-allowed disabled:hover:bg-slate-300"<br>
        ><br>
          {isSelected ? "Added to Stack" : "Add to Stack"}   <br>       
        </button><br>
        
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?<br>
Ans:- Parent to Child: Pass data as props.<br>
      Child to Parent: Pass a callback function as a prop from the <br>parent, then call that function inside the child with the data.<br>