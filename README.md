<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aquaweb.css</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bartlomiej-aleksiejczyk/aquaweb.css@0.7.3/dist/aquaweb.min.css" />
  </head>
  <body>
    <nav class="navbar">
      <h2 class="navbar-brand"><a href="#navbar">Aquaweb.css</a></h2>
      <ul class="group group-end group-fill">
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#quickstart">Quick Start</a></li>
        <li><a href="#examples">Examples</a></li>
      </ul>
    </nav>
    <main class="responsive-container">
      <section id="introduction">
        <h1>Introduction to Aquaweb.css</h1>
        <p>Aquaweb.css is a lightweight CSS library that aims to provide a simple way to style HTML with an emphasis on a native HTML look. What's more, Aquaweb.css is fully responsive, just like the native styling of HTML.</p>
      </section>

      <section id="quickstart">
        <p>To start using Aquaweb.css, simply add the following code to your website's HTML.</p>
        <code><pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/bartlomiej-aleksiejczyk/aquaweb.css@0.7.2/dist/aquaweb.min.css&quot; /&gt;</pre></code>
        <p>
          By default, all elements will take up the available space. To prevent excessive stretching, use the class:
          <b>responsive-container</b>
        </p>

        <pre><code>&lt;div class=&quot;responsive-container&quot;&gt; ...your html content &lt;/div&gt;</code></pre>
      </section>
      <section id="examples">
        <h2>Examples and Usage</h2>
        <section id="form">
          <h3>Form Elements</h3>
          <form>
            <fieldset>
              <legend>Sample Form</legend>
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />

              <label for="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" />

              <label for="gender">Gender</label>
              <select id="gender">
                <option>Female</option>
                <option>Male</option>
                <option>undisclosed</option>
              </select>

              <div>
                <label for="yes">
                  <input type="radio" id="yes" name="subscribe" checked />
                  Subscribe
                </label>
                <label for="no">
                  <input type="radio" id="no" name="subscribe" />
                  Do Not Subscribe
                </label>
              </div>

              <label for="message">Message</label>
              <textarea id="message" placeholder="Type your message here..."></textarea>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section id="typography">
          <h3>Typography</h3>
          <h1>Main Heading</h1>
          <h2>Subheading</h2>
          <p>
            This is a paragraph demonstrating
            <strong>bold</strong>
            ,
            <em>italic</em>
            , and
            <u>underlined</u>
            text.
          </p>
          <p>
            Keyboard Shortcut:
            <kbd>Ctrl</kbd>
            +
            <kbd>Alt</kbd>
            +
            <kbd>Delete</kbd>
          </p>
        </section>

        <section>
          <h3>Images</h3>
          <figure>
            <img src="https://placehold.co/250x200" alt="Placeholder image 1" />
            <figcaption>Small Image</figcaption>
          </figure>
          <figure>
            <img src="https://placehold.co/1600x300" alt="Placeholder image 2" />
            <figcaption>Medium Image</figcaption>
          </figure>
          <figure>
            <img src="https://placehold.co/6000x3000" alt="Placeholder image 2" />
            <figcaption>Big Image</figcaption>
          </figure>
        </section>

        <section>
          <h3>Tables</h3>
          <table>
            <caption>Sample Data Table</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Junior PHP Developer</td>
                <td>2021-01-02</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>Lead Architect</td>
                <td>2020-12-19</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jack Doe</td>
                <td>Designer</td>
                <td>2022-08-09</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Asci image</h3>
          <pre class="asci-image">
                                                _                  
            /\                                 | |                 
           /  \   __ _ _   _  __ ___      _____| |__   ___ ___ ___ 
          / /\ \ / _` | | | |/ _` \ \ /\ / / _ \ '_ \ / __/ __/ __|
         / ____ \ (_| | |_| | (_| |\ V  V /  __/ |_) | (__\__ \__ \
        /_/    \_\__, |\__,_|\__,_| \_/\_/ \___|_.__(_)___|___/___/
                    | |                                            
                    |_|                                            
        </pre
          >
        </section>
        <section>
          <h3>Tree list</h3>
          <div class="tree-list-container">
            <ul>
              <li>
                Fruits
                <ul>
                  <li>Apple</li>
                  <li>Banana</li>
                  <li>Cherry</li>
                </ul>
              </li>
              <li>
                Vegetables
                <ul>
                  <li>Carrot</li>
                  <li>Broccoli</li>
                  <li>Spinach</li>
                </ul>
              </li>
              <li>
                Dairy
                <ul>
                  <li>Milk</li>
                  <li>Cheese</li>
                  <li>Yogurt</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="tree-list-container">
            <strong>Food</strong>
            <ul>
              <li>
                <details>
                  <summary>Fruits</summary>
                  <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Cherry</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Vegetables</summary>
                  <ul>
                    <li>Carrot</li>
                    <li>Broccoli</li>
                    <li>Spinach</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Dairy</summary>
                  <ul>
                    <li>Milk</li>
                    <li>Cheese</li>
                    <li>Yogurt</li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div class="tree-list-container">
            <ul>
              <li>
                <details>
                  <summary>Fruits</summary>
                  <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Cherry</li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div class="tree-list-container">
            <ul>
              <li>
                Fruits
                <ul>
                  <li>Apple</li>
                  <li>Banana</li>
                  <li>Cherry</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3>
            <a href="#breadcrumbs">#</a>
            Breadcrumbs
          </h3>

          <nav aria-label="breadcrumb" class="breadcrumbs">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/home/">Home</a></li>
              <li class="breadcrumb-item"><a href="/category/">Category</a></li>
              <li class="breadcrumb-item"><a href="/category/sub-category/">Sub-Category</a></li>
              <li class="breadcrumb-item"><a href="/category/sub-category/sample-item">Sample Item</a></li>
            </ol>
          </nav>

          <h4>Extended Breadcrumbs</h4>
          <nav aria-label="breadcrumb" class="breadcrumbs">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/home/">Home</a></li>
              <li class="breadcrumb-item"><a href="/category/">Category</a></li>
              <li class="breadcrumb-item"><a href="/category/sub-category/">Sub-Category</a></li>
              <li class="breadcrumb-item"><a href="/category/sub-category/sample-item">Sample Item</a></li>
              <li class="breadcrumb-item"><a href="/category/sub-category/extra-level/">Extra Level</a></li>
              <li class="breadcrumb-item"><a href="/category/sub-category/extra-level/deeper-item">Deeper Item</a></li>
            </ol>
          </nav>
        </section>
      </section>

      <footer>
        <small>Aquaweb.css - released under MIT license</small>
      </footer>
    </main>
  </body>
</html>
