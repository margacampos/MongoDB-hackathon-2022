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

When you click "Enter the newsroom" another object is created to keep track of the current game. It chooses a random event depending on if the tutorial property in gameObject is true or not and saves it as current event. It also keeps track of scores in the different sections and the current week in game.

```
{
  currentMoment:"START", 
  currentEvent:"",
  selectEvent:-1,
  selectTitle:-1,
  selectLayout:-1,
  week:0
}
```
After this the game queries for 5 random events (As seen in [here](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/pages/api/events-and-articles-today.ts)) and one is selected as the winner event, which are saved for later use.
#### Dialogs:
When you enter the newsroom for the first time, the first thing that happens is that the managing editor greets you. This is thanks to the dialogs system.

Dialogs here depend on the currentEvent property. This property might seem like it has something to do with the events of the GDELT database but it doesn't, the event it contains is just the one happening at the newsroom. For example: When you play for the first time, the event selected is called "firstday" and all the dialogs played are related to that event.

Each currentEvent has its own object that looks like this:
```
    {
        event:"firstday",
        dialog:{
            START:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_EVENT:["REPORTER", "ART_DIRECTOR"],
            AFTER_TITLE:["NEWS_EDITOR", "ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR"]
        },
        available:{
            START:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_EVENT:["MANAGING_EDITOR","ART_DIRECTOR"],
            AFTER_TITLE:["NEWS_EDITOR", "REPORTER", "ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR"]
        },
        knowledge:{
            MANAGING_EDITOR:{type:"location", knowledge:0},
            NEWS_EDITOR:{type:"actor", knowledge:0},
            ART_DIRECTOR:"none",
            REPORTER:{type:"eventCode", knowledge:0}
        }
    }
```

There are two types of dialog:
- Activated when currentMoment changes.
  This dialogs can not be skipped and are used to display information you want the player to know. They are normally related to the currentEvent. You can find this dialogs [here as the array simpleDialogs](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/data/dialogsNew.ts).
  They are displayed in the order the *dialog* property above says.
- Activated when you click on the character.
  This are the optional but crucial ones if you want a high score. They combine dialogs related with the current event and clue dialogs for what the article they are looking for contains. This dialogs allow for asking about the location, the actors and the event action. Not all characters know the same information. You can find this dialogs in [dialogsNew.ts arrays simpleOnClickDialogs and clueDialogs](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/data/dialogsNew.ts).
  The *available* property says which charaters will be at the newsroom at each different moment meaning the characters that can be asked through the click on dialogs.
  The *knowledge* property says who knows what and what level of knowledge they have. The level of knowledge affects the way they talk about the property they know.
  
This dialogs are generated by the [startDialog and startOnClickDialog](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/components/Game/GameScreen.tsx) respectively.
  
#### Select event:
The first task you have to complete is assigning a story to the reporter. This is achieved through having to choose between events as seen in the GDELT database.

- The events fetched earlier are passed to a function called *getEventName* in [*eventUtils*](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/utils/eventUtils.ts). This function returns a title for the event which is the one you see in game. This function uses the [CAMEO codes and labels](http://data.gdeltproject.org/documentation/CAMEO.Manual.1.1b3.pdf) that you can find in the GDELT project website. You can see this data in the app [here](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/data/cameoCodes.ts).
- Once you choose one of the events, the object is updated with the punctuation you got and the currentMoment property is updated to keep track of what you have done. The possible moments are: START, AFTER_EVENT, AFTER_TITLE and AFTER_LAYOUT.
The way punctuation works is by comparing the event you chose with the event selected as winner by the game and how many of their properties have the same value.

#### Select title:
After selecting an event, it's time to select a title. Titles are fetched by the cloud function using the property SOURCEURL and saved in the database as the property title. You can see more about how this is done [here](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/pages/api/news-title-generator.js). 
Selecting a title works similar to Select event. You choose and get a punctation based on your choice. Then, the *currentMoment* is updated.
#### Select layout:
Now it's time to help choose a design for the front page. There are three different designs:

<p>
<img src="https://user-images.githubusercontent.com/80516949/170816056-e935cf60-cf50-4d68-afae-74854cdfc695.svg" alt="Template for the newsroom" width="250px"/>
<img src="https://user-images.githubusercontent.com/80516949/170816065-981e4933-e4c3-454e-b4fe-dee6c4da794d.svg" alt="Template for the newsroom" width="250px"/>
<img src="https://user-images.githubusercontent.com/80516949/170816068-02273c0f-8cbd-49ac-8b36-9328333eacb1.svg" alt="Template for the newsroom" width="250px"/>
</p>

All of them are svgs and their text values are modified to contain the title you chose previously, the date of the event you chose and their website/link to the real article. The title is modified to fit the templates by [arrangeTitle or arrangeTitle2](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/utils/gameUtils.ts) in gameUtils. You can see each template in their respective components: [Template1.tsx](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/components/Game/Templates/Template1.tsx), [Template2.tsx](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/components/Game/Templates/Template2.tsx) and [Template3.tsx](https://github.com/margacampos/MongoDB-hackathon-2022/blob/main/components/Game/Templates/Template3.tsx).

This choice does not have a punctuation and it is not considered for the final score, you are free to choose which ever you like most.
The selection process works the same as selecting a title but this time there is not an event behind it so the decision is only stored as a string with the name of the template.

#### End week:

After you have chosen everything, you can finish the week and present your work to the editor-in-chief who will judge it and say if it will be published or not.
This process is based on the average between the select event and select title punctuations. If your score is less or equal to five your work won't be published, otherwise it will.

The template and title are the ones chosen earlier and below the score you can find the real articles of the event and title you chose. Feel free to read them if they interest you, the game is meant for you to find interesting stories while playing so you could say that stopping to read the articles is a part of the game.

Now you can choose between continuing or not. If you choose to continue, every week's dialogs and events should be different as they are set at random and the dialogs depend on the currentEvent property which right now has the possibility of being five different events: firstday, cupcakes, empty, sick, missingcoat.
If you decide to not continue, your progress will be saved so you can come back later.

### Search in the archives:

### Achievements:

### Right now the project is live here: https://mongo-db-hackathon-2022.vercel.app/ . All you need to do is click and enjoy!

<img src="https://user-images.githubusercontent.com/80516949/170373377-5b44540b-8133-4e06-a57c-893575b8f711.png" width="100"/><img src="https://user-images.githubusercontent.com/80516949/170373415-eaafc9bf-30d9-4de8-90ca-02baf3efe6ec.png" width="100"/><img src="https://user-images.githubusercontent.com/80516949/170373442-3f6363c1-607e-442d-b261-ff77b5fb43e6.png" width="130"/><img src="https://user-images.githubusercontent.com/80516949/170373426-b7712460-8cc7-4d5d-ba82-6fcceb695209.png" width="200"/> 
### Thanks for reading 🤎
