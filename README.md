  <body>
    <h1>[FreeCodeCamp] Front End Development Libraries Projects</h1>
    <h2>Build a 25 + 5 Clock</h2>
    <p align="justify"> Objective: Build an app that is functionally similar to
      this: <a href="https://codepen.io/freeCodeCamp/full/XpKrrW">https://codepen.io/freeCodeCamp/full/XpKrrW</a>.<br>
      <br>
      Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.</p>
    <p align="justify">You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a
      frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are
      not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are
      not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!</p>
    <p align="justify"><strong>User Story #1:</strong> I can see an element with <strong> id="break-label"</strong> that contains a string (e.g. "Break
      Length").</p>
    <p align="justify"><strong>User Story #2:</strong> I can see an element with<strong> id="session-label"</strong> that contains a string (e.g. "Session
      Length").</p>
    <p align="justify"><strong>User Story #3:</strong> I can see two clickable elements with corresponding IDs: <strong>id="break-decrement"</strong>
      and <strong> id="session-decrement"</strong>.</p>
    <p align="justify"><strong>User Story #4:</strong> I can see two clickable elements with corresponding IDs: <strong>id="break-increment"</strong>
      and <strong>id="session-increment"</strong>.</p>
    <p align="justify"><strong>User Story #5:</strong> I can see an element with a corresponding <strong>id="break-length"</strong>, which by default (on
      load) displays a value of 5.</p>
    <p align="justify"><strong>User Story #6:</strong> I can see an element with a corresponding<strong> id="session-length"</strong>, which by default
      displays a value of 25.</p>
    <p align="justify"><strong>User Story #7:</strong> I can see an element with a corresponding<strong> id="timer-label"</strong>, that contains a string
      indicating a session is initialized (e.g. "Session").</p>
    <p align="justify"><strong>User Story #8:</strong> I can see an element with corresponding <strong>id="time-left"</strong>. NOTE: Paused or running,
      the value in this field should always be displayed in mm:ss format (i.e.25:00).</p>
    <p align="justify"><strong>User Story #9: </strong>I can see a clickable element with a corresponding<strong> id="start_stop"</strong>.</p>
    <p align="justify"><strong>User Story #10: </strong>I can see a clickable element with a corresponding<strong> id="reset"</strong>.</p>
    <p align="justify"><strong>User Story #11:</strong> When I click the element  with the id of <strong>reset</strong>, any running timer should be
      stopped, the value within <strong>id="break-length" </strong>should return to <strong>5</strong>, the value within <strong>id="session-length"</strong> should return to 25, and the element with<strong>
        id="time-left" </strong>should reset to its default state.</p>
    <p align="justify"><strong>User Story #12: </strong>When I click the element with the id of <strong>break-decrement</strong>, the value within <strong>id="break-length"</strong> decrements by a value of 1, and I can
      see the updated value.</p>
    <p align="justify"><strong>User Story #13:</strong> When I click the element  with the id of <strong>break-increment</strong>, the value within <strong>id="break-length"</strong>
      increments by a value of 1, and I can see the updated value.</p>
    <p align="justify"><strong>User Story #14:</strong> When I click the element with the id of <strong>session-decrement</strong>, the value within <strong>id="session-length"
        </strong> decrements by a value of 1, and I can see the updated value.</p>
    <p align="justify"><strong>User Story #15:</strong> When I click the element with the id of<strong> session-increment</strong>, the value within <strong>id="session-length"</strong>
      increments by a value of 1, and I can see the updated value.</p>
    <p align="justify"><strong>User Story #16:</strong> I should not be able to set a session or break length to &lt;= 0.</p>
    <p align="justify"><strong>User Story #17:</strong> I should not be able to set a session or break length to &gt; 60.<br>
      <strong><br> User Story #18:</strong> When I first click the element with id="start_stop", the timer should begin running from the value currently
      displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.</p>
    <p align="justify"><strong>User Story #19:</strong> If the timer is running, the element with the id of <strong>time-left</strong> should display the
      remaining time in <strong> mm:ss </strong>format (decrementing by a value of 1 and updating the display every 1000ms).</p>
    <p align="justify"><strong>User Story #20:</strong> If the timer is running and I click the element with <strong>id="start_stop"</strong>, the
      countdown should pause.</p>
    <p align="justify"><strong>User Story #21:</strong> If the timer is paused and I click the element with<strong> id="start_stop"</strong>, the
      countdown should resume running from the point at which it was paused.</p>
    <p align="justify"><strong>User Story #22:</strong> When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins,
      the element with the id of <strong>timer-label</strong> should display a string indicating a break has begun.</p>
    <p align="justify"><strong>User Story #23: </strong>When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break
      countdown should begin, counting down from the value currently displayed in the <strong> id="break-length"</strong> element.</p>
    <p align="justify"><strong>User Story #24:</strong> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins,
      the element with the id of <strong>timer-label</strong> should display a string indicating a session has begun.</p>
    <p align="justify"><strong>User Story #25:</strong> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown
      should begin, counting down from the value currently displayed in the <strong> id="session-length"</strong> element.</p>
    <p align="justify"><strong>User Story #26: </strong>When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time
      is up should play. This should utilize an HTML5 <strong>audio </strong>tag and have a corresponding <strong>id="beep"</strong>.</p>
    <p align="justify"><strong>User Story #27:</strong> The audio element with <strong> id="beep"</strong> must be 1 second or longer.</p>
    <p align="justify"><strong>User Story #28: </strong>The audio element with id of <strong> beep </strong>must stop playing and be rewound to the
      beginning when the element with the id of <strong>reset </strong>is clicked.</p>
    <p align="justify">You can build your project by <strong><u>using this CodePen template</u></strong> and clicking <strong>Save </strong>to
      create your own pen. Or you can use this CDN link to run the tests in any environment you like: <a href="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</a></p>
    <p align="justify"> Once you're done, submit the URL to your working project with all its tests passing.</p>
    <p><strong>Solution: </strong>
    <a href="https://github.com/cwchan0212/fcc-clock">Source</a><strong>
    <a href="https://github.com/cwchan0212/fcc-clock"> </a>/ </strong><a href="https://codepen.io/cwchan0212/pen/LYdPWbb"><strong>Demo@codepen</strong></a></p>
