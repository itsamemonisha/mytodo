# README


To run this application:

* Open terminal at file

* rails db:migrate [for the ruby on rails backend]

* cd todo-app && npm install [for the react frontend files]

 * Make sure to create a Procfile.dev [vi Procfile.dev] with the following contents:
 
  web: PORT=4000 yarn --cwd todo-app start

  api: PORT=3000 bundle exec rails server
  
 It runs the respective frameworks on the specified ports


* heroku local -f Procfile.dev

Some screenshots of the app look as follows:

<img width="1440" alt="Screen Shot 2021-02-05 at 5 39 46 PM" src="https://user-images.githubusercontent.com/77173644/107041479-ff140b80-67d9-11eb-9a21-7ff516036d75.png">

<img width="1440" alt="Screen Shot 2021-02-05 at 5 41 12 PM" src="https://user-images.githubusercontent.com/77173644/107041551-17842600-67da-11eb-81b7-eed6514b0cb7.png">

