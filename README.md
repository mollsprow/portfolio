# Molly's portfolio website

See it live here: https://molly.riceprower.com/

## Running locally

Site is built with Jekyll and can be built on a local machine for testing.

1. Follow [Jekyll Prerequisite installation instructions](https://jekyllrb.com/docs/installation/).
2. Run `gem install jekyll bundle`.
3. Run `bundle exec jekyll serve`.
4. Open the running site at http://localhost:4000.

You can then make changes to the site code and refresh your browser to see changes live.

### Tailwind

Site uses [TailwindCSS](https://tailwindcss.com), which is run through **PostCSS** automatically.

Tailwind must be built to see changes, in order to produce the smallest CSS file possible. If not re-built for all changes made, those changes will not even appear!

1. Navigate to the [`js_tools`](js_tools) directory locally.
2. With **Node** and **NPM** installed, run `npm install`.
3. Once install is complete, run `npm run start` to start a small server that watches for changes.

When committing, please run `npm run build` to produce the production version of the styles, and commit that new build.

### VS Code task: "Run stuff"

Once all the above steps are working individually, you can start up the site locally using the VS Code task **Run stuff**.

1. In VS Code, open the **Command pallette** (using `Ctrl-Shift-P` on Windows).
2. Type "Run task". Choose the option **Tasks: Run Task**.
3. Navigate to or type the task name "Run Stuff", then run this task.

Both the **Jekyll** server and the **NPM** watcher (which re-runs Tailwind as needed) should start in side-by-side Terminal tabs. Keep both of these tabs running, then head to http://localhost:4000 to see the running site.