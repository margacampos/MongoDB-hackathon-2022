# 📰 Welcome to The Newsroom 📰
Find the project live here: https://mongo-db-hackathon-2022.vercel.app/
![the-newsroom-background-final](https://user-images.githubusercontent.com/80516949/170366202-dfd86e31-9a9a-4ad9-97b6-8fd554e1bcf7.svg)

## What is the goal?
To show people positive news happening all around the world in an engaging/creative way. All the events showed in The Newsroom are real and the related articles can be accessed by clicking on the respective links.
### Example:
If you see an article like this, there is always a place where you can click to find the full real article. In this case, you would need to click in "here" to open a new tab with the article related.

<a href="https://www.mongodb.com/world-2022/hackathon" target="_blank" rel="noopener"> <img src="https://user-images.githubusercontent.com/80516949/170371874-70e51227-36b4-4903-893c-92d82cc84cb1.png"/> </a>


## What is this?
This is a project made for the [MongoDB World Hackathon '22](https://www.mongodb.com/world-2022/hackathon).
It is also a place where you can find the most relevant (and positive) global news of last month as recorded by the GDELT database.

## What you can do...
Right now you can:
- **Enter The Newsroom:** Move around and talk to other characters in this visual novel kind of game while completing tasks and trying to make front page.
- **Visit the archives:** Find news to share or just learn more about what was happening around the world this last month.
- **Gallery:** Learn more about the different jobs involved in making a newspaper and find more about this project.

## How it works:
The Newsroom is powered by Nextjs, Google Cloud (BigQuery, Pub/Sub, Cloud Functions, Cloud Scheduler), [The GDELT Project](https://www.gdeltproject.org/) and MongoDB.
### More in depth:
- The MongoDB cluster lives on MongoDB Atlas and It's updated by a Cloud Function that queries through BigQuery the GDELT database and that is called when a Pub/Sub message is send by the Cloud Scheduler. Right now it runs once a month.
If you would like to see the cloud function code, you can find it here: [https://github.com/margacampos/mongodb-hackathon2022-cloud-function](https://github.com/margacampos/mongodb-hackathon2022-cloud-function)
- The Nextjs web app hosted on vercel queries the MongoDB cluster through aggregation.

When you load the website, a game object is created in the [Layout](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/components/Layout.tsx) component (called gameObject).
```
{
    name: "",
    punctuation: [0],
    selectEvent:[0],
    selectTitle:[0],
    media: 0,
    doneEvents:[""],
    achievements:[],
    tutorial: true
}
```
This object is also saved in local storage when possible and it helps keep track of everything, from achievements to every punctuation you get in the newsroom.

### Enter the newsroom
In this section I will talk about different actions in the game and how they work as well as how dialogs work.
When you click "Enter the newsroom" another object is created to keep track of the current game.
´´´
{
  currentMoment:"START", 
  currentEvent:"",
  selectEvent:-1,
  selectTitle:-1,
  selectLayout:-1,
  week:0
}
´´´

#### Select event:
The first task you have to complete is assigning a story to the reporter. This is achieved through having to chose between events as seen in the GDELT database.
- First it queries for 5 different events (As seen in [here](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/pages/api/events-and-articles-today.ts)), which are saved for later use. 
- The events are then past to a function called getEventName in [eventUtils](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/utils/eventUtils.ts). This function returns a title for the event which is the one you see in game. This function uses the [CAMEO codes and labels](http://data.gdeltproject.org/documentation/CAMEO.Manual.1.1b3.pdf) that you can find in the GDELT project website. You can see this data in the app [here](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/data/cameoCodes.ts).
- Once you choose one of the events, the object is updated with the punctuation you got and the currentMoment property is updated to keep track of what you have done. The possible moments are: START, AFTER_EVENT, AFTER_TITLE and AFTER_LAYOUT.
#### Select title:
#### Select layout:
#### End week:
#### Dialogs:
### Search in the archives:
### Achievements:
### Right now the project is live here: https://mongo-db-hackathon-2022.vercel.app/ . All you need to do is click and enjoy!

<img src="https://user-images.githubusercontent.com/80516949/170373377-5b44540b-8133-4e06-a57c-893575b8f711.png" width="100"/><img src="https://user-images.githubusercontent.com/80516949/170373415-eaafc9bf-30d9-4de8-90ca-02baf3efe6ec.png" width="100"/><img src="https://user-images.githubusercontent.com/80516949/170373442-3f6363c1-607e-442d-b261-ff77b5fb43e6.png" width="130"/><img src="https://user-images.githubusercontent.com/80516949/170373426-b7712460-8cc7-4d5d-ba82-6fcceb695209.png" width="200"/> 
### Thanks for reading 🤎
