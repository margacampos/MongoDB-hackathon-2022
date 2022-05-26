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
- The Nextjs web app hosted on vercel queries the MongoDB cluster through aggregation.

### Right now the project is live here: https://mongo-db-hackathon-2022.vercel.app/ . All you need to do is click and enjoy!

<img src="https://user-images.githubusercontent.com/80516949/170373377-5b44540b-8133-4e06-a57c-893575b8f711.png" width="100"/><img src="https://user-images.githubusercontent.com/80516949/170373415-eaafc9bf-30d9-4de8-90ca-02baf3efe6ec.png" width="100"/><img src="https://user-images.githubusercontent.com/80516949/170373442-3f6363c1-607e-442d-b261-ff77b5fb43e6.png" width="130"/><img src="https://user-images.githubusercontent.com/80516949/170373426-b7712460-8cc7-4d5d-ba82-6fcceb695209.png" width="200"/> 
### Thanks for reading 🤎
