<h1>Mouse Action Practice</h1>
<p>Based on understanding and practice with HTML canvas, the goal is to create an object that follows the mouse and adjust its acceleration.</p>
<br><br>
<h3>- First commit</h3>
<p>Creating a cursor object that follows the mouse using HTML canvas</p>
<p><b>* issue1</b>: The object smoothly follows the cursor, but when the mouse stops, the object stops at a different position than the last end.</p>
<h3>- fix issue1</h3>
<p>moved the cursor draw and animate functions from the mousemove event in app.js to the animate function in app.js. Instead of applying the functions when the mouse moves, I have used window.requestAnimationFrame to draw them on the screen, ensuring that the object reaches its stopped position even when the mouse is still.</p>
<h3>- make flexible cursor ball</h3>
<p>Objective: To create a cursor's ball that dynamically changes its size along the direction of the mouse.</p>
<p>Changed the basic circular shape to an elliptical one using 'ctx.ellipse', and calculated the distance between the current mouse position and the previous mouse position by subtracting the latter from the former. However, there were cases where the result was negative depending on the direction of the mouse movement, so used Math.abs to ensure that the expression always produces positive values. Since the resulting distances were too large to directly apply to the size of the object, so mitigated this issue by multiplying by an arbitrary value of 0.2.</p>
<p>* issue2 : When the mouse moves only left-right or up-down, the desired shape appears. However, when it moves diagonally, both the x and y values change simultaneously, causing the shape to stretch in both horizontal and vertical directions, resulting in an undesirable appearance. Therefore, to make it appear as if the mouse is following its direction when moving diagonally, we need to consider alternative methods.</p>