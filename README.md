# <h1>techBlog</h1>
<a href="https://imgur.com/VEWS8Vn"><img src="https://i.imgur.com/VEWS8Vn.png" title="source: imgur.com" width=150 height=150 /></a>

TechBlog is a blogging platform created as a team project by the members of team `console.log(4)` in General Assembly's Software Engineering Immersive.

It's a single page application (SPA) that allows users to sign up and sign in to create their own blog entries, comment on the entries of other users, and update or delete both their entries and their comments. Users may change their password when logged in. Visitors without an account (and signed out users) can still view all the existing entries and comments, but may not make any changes to either. This functionality is ideal for maintaining any public collection viewable by anyone, but only accessible to authorized and authenticated users for edits.

###### (a note from the developers: for security reasons, we recommend using a placeholder email and password to make an account on techBlog. Do not use real credentials you use anywhere else)

## About the Front End

The front end is built with Javascript/jQuery, HTML, and CSS. Resouces (entries and comments) are queried with AJAX, and displayed via Handlebars templates, which pull each entry and its associated comments into a section with additional Bootstrap elements.

## About the Back End

The back end is built with Javascript, uitlizing Express and the Mongoose modeling tool on top of MongoDB. Created entries and comments are stored in MongoDB collections.

## Resources
- [Back end repo](https://github.com/tech-blog-project/tech-blog-api)
- [Front end repo](https://github.com/tech-blog-project/tech-blog-client)
- [Deployed application (GitHub pages)](https://tech-blog-project.github.io/tech-blog-client/)
- [Deployed back end (Heroku)](https://infinite-spire-96570.herokuapp.com/)


## Technologies Used

- AJAX
- Atom
- Bootstrap
- CSS
- cURL
- Express
- Git/GitHub
- Handlebars
- Heroku
- HTML
- Javascript
- jQuery
- MongoDB
- Mongoose
- Node.js
- NPM


## Development Process

techBlog was our team members' second full-stack project, with both a front and a back end built by us, but our first working together as a team. While we have worked with each other on snippets of code before, we hadn't collaborated on building anything as complex as a full-stack application from the ground up.

We started by having all team members create wireframes, and compared our mock-ups for common features, so we could use the design and layout features we all believed would work best. We also talked through our ERDs and user stories, and reviewed the MVP requirements as a team to make sure we were on the same page about our application features and back end structure.

After our initial planning meeting, we whiteboarded, and created a checklist for our first sprint. We split up individually, and then into pairs, to work on our initial back end and front end features. We created our resource models and routes on the back end, and basic HTML structure and authorization/authentication CRUD events on the front end.

As we got accustomed to working together, switching back and forth between front end and back end, as well as from individual programming to pair programming to mob programming came naturally. After our initial CRUD actions were completed, we moved towards completing CRUD actions on our entry resource, and corresponding HTML pieces to test them. We also implemented our initial handlebars template, for displaying entries only, without comments. Some additional features, like prefilling forms for UPDATE/DELETE actions for entries, were also implemented early and as a team, because some team members were more comfortable with the process, and we wanted all team members to have a solid idea of how to do this on their own in the future. Authorization and entry messaging, CREATE actions on comments, connecting them to entries on the back end, and displaying them with handlebars on the front end were accomplished on day two, which was also our largest team problem solving sprint. Day three focused on completing CRUD actions on comments, and completing what remained of the MVP checklist: making certain actions available and visible to logged in users only, styling, and documentation.

As features were completed, we supervised each other's GIT commits, and paused work when a team member was ready to merge their feature into our development branch. All merges and subsequent pulls were done as a team, to maintain solid version control. We also utilized Slack to notify team members of merge readiness.

Our end of day meetings involved review of the day's "still needs work" and "completed" features, problem solving review, and creating the next day's checklists, as well as some preliminary splitting up of the next day's workload. We finalized these assignments in the morning meeting, while always knowing we could pair up or mob program to solve anything that a single team member could not quite pull together.

Here are some examples of our whiteboarding and daily planning checklists:

<h3>Day 1 Planning</h3>
<a href="https://imgur.com/1DB0Q2j"><img src="https://i.imgur.com/1DB0Q2j.jpg" title="source: imgur.com" /></a>

<h3>Day 2 Planning</h3>
<a href="https://imgur.com/q43ctty"><img src="https://i.imgur.com/q43ctty.jpg" title="source: imgur.com" /></a>

<h3>Day 3 Planning</h3>
<a href="https://imgur.com/fGLVWsH"><img src="https://i.imgur.com/fGLVWsH.jpg" title="source: imgur.com" /></a>



## Problem Solving Strategies

We began our initial problem solving as we had done for individual projects, by diving into the docs for Mongoose, Express, and Handlebars, and searching Stack Overflow posts. However, we quickly realized that asking each other for input, and even fully mob programming through an issue worked much better, and got issues resolved quicker and more efficiently. Especially after our first merge conflicts on day one, we only merged and pulled together from then on.

We did end up opening several tickets in the issue queue, but those were also opened as a team, and worked through as a team with the responding instructor. We were also able to come up with solutions by looking up past issues in the queue, from previous cohorts, and current similar issues (both closed and open) by our cohort.

## Reflections, Future Goals, and Planned Fixes

Working on this project gave us a much better understanding of our own strengths coming in, and how they could complement each other. We were also able identify the areas in which we could grow, and utilize each other to help us improve via pair programming and mob programming. We were better coders together right away, by having all our strengths and work ethic combined, but we are also better solo developers after this project.


Additional features we would like to implement:

- Dark mode. Dark mode is a great choice for users on mobile, or for use in specific lighting, and we would like to implement it
- Collapsing entries and comments, and threading comments with comment replies
- A toggle to let the user see only their own entries
- Enable the user to set a userpic
- Enable the user to "like" other entries or comments, or to follow other users

Issues we were unable to solve in V.1, but would like to address:

- On our comments, the comment ID currently displays so it can be prefilled into the edit and delete forms. Unfortunately, the ID is a large and unwieldy series of letters and numbers, and doesn't look good.
- another issue!
- not too many issues, I hope

## ERDs

<h3>ERD</h3>
<a href="https://imgur.com/PbfINtYj"><img src="https://i.imgur.com/PbfINtY.jpg" title="source: imgur.com" /></a>

## Resource Routes

The routes:

### User
| HTTP| CRUD| URI pattern | Method/Action |
| :---:| :---:|:---:| :---:        |
| POST  |CREATE|  /sign-up | app.post()/sign-up  |
| POST  | CREATE|/sign-in  | app.post()/sign-in    |
| PATCH | UPDATE|/change-password | app.patch()/change-password|
| DELETE |DELETE| /sign-out  |  app.delete()/sign-out |

### Entry
| HTTP |CRUD| URI pattern | Method/Action |
| :---:| :---:|:---:| :---:        |
| POST  |CREATE|  /entrys | app.post()/create  |
| GET  |READ| /entrys  | app.get()/index    |
| GET   |READ| /entrys/:id  | app.get()/show  |
| PATCH |UPDATE| /entrys/:id | app.patch()/update|
| DELETE |DELETE| /entrys/:id |  app.delete()/destroy |

### Comment
| HTTP |CRUD| URI pattern | Method/Action |
| :---:| :---:|:---:| :---:        |
| POST  |CREATE|  /comments | app.post()/create  |
| GET |READ| /comments  | app.get()/index    |
| PATCH | UPDATE|/comments/:id | app.patch()/update|
| DELETE |DELETE| /comments/:id |  app.delete()/destroy |



## Wireframes

<h3>Wire Frame 1</h3>
<a href="https://imgur.com/hBhAxwQ"><img src="https://i.imgur.com/hBhAxwQ.jpg" title="source: imgur.com" /></a>

<h3>Wire Frame 2</h3>
<a href="https://imgur.com/OJriMnJ"><img src="https://i.imgur.com/OJriMnJ.png" title="source: imgur.com" /></a>

<h3>Wire Frame 3</h3>
<a href="https://imgur.com/2TIXfEr"><img src="https://i.imgur.com/2TIXfEr.png" title="source: imgur.com" /></a>

## User stories

<h3>User Stories</h3>

<a href="https://imgur.com/ZlA2dFu"><img src="https://i.imgur.com/ZlA2dFu.jpg" title="source: imgur.com" /></a>


## Acknowledgments
Team `console.log(4)` are:
- [Moutwei Chap](https://github.com/Moutwei)
- [Nancy Cruz](https://github.com/Nancy4510)
- [Alex Davidenko](https://github.com/alexgdav)
- [Joseph Pelliccia](https://github.com/jpelliccia)

Additional thanks to GA SEI05, and our instructors for the support and the issue queue, and a special shout-out to Eron Salling for giving us problem-solving choices!
