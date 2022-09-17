import LinkBtn from "./LinkBtn"
import RoadRunnerVideo from "../assets/road-runner-video.mp4"

const ContentBody = () => {
  return (
    <div className="mt-12 px-3 py-6 lg:px-10 lg:py-10">
        <div className="text-2xl">Welcome 🎉</div>
        <div className="mt-3 text-sm font-light">
            <div>
                <span className="font-medium">What is Roadrunner: </span>   
                Road Runner is a global logistics and mobility fin-tech platform that handles all of your 
                logistics and revenue-based vehicle financing. The company was birthed in 2022 to help bridge 
                the gap between you and having your parcels delivered in no time. We're a team of dedicated, 
                efficient and reliable team players, and we help deliver your package to your desired destination. 
                Your convenience is our priority. Book a delivery today.
            </div>
            <div className="mt-5">
                <span className="font-medium mt-2">Mission: </span>   
                Our mission is to deliver a positive, reliable experience to each and every one of our 
                clients while offering exceptional value in the marketplace and setting the standard for'
                professionalism in the logistic solutions we provide.
            </div>

            <div className="mt-4 font-medium cursive">If we're not in your city we're comming soon</div>

            <div className="mt-10 grid grid-cols-1 space-y-5">
                <a href="https://roadrunner.ng" target="_blank" rel="noreferrer"><LinkBtn text='Website 🌎'/></a>
                <a href="https://roadrunner.ng" target="_blank" rel="noreferrer"><LinkBtn text='Newsroom 📰'/></a>
                <a href="https://roadrunner.ng" target="_blank" rel="noreferrer"><LinkBtn text='Roadrunner cities 🌌'/></a>
                <a href="https://roadrunner.ng" target="_blank" rel="noreferrer"><LinkBtn text='Roadrunnner Community 👥'/></a>
                <a href="https://roadrunner.ng" target="_blank" rel="noreferrer"><LinkBtn text='Download the iOS Mobile App (coming soon)'/></a>
                <a href="https://roadrunner.ng" target="_blank" rel="noreferrer"><LinkBtn text='Download the Android Mobile App (coming soon)'/></a>
                <a href="https://roadrunner.ng" target="_blank" rel="noreferrer"><LinkBtn text='Get Riders App'/></a>
            </div>

            <div className="text-2xl mt-14 font-medium">🔥 ADS: Partner with Roadrunner and earn more 🔥</div>
                <div className="mt-4">
                Our mission is to deliver a positive, reliable experience to each and every one of our 
                professionalism in the logistic solutions we provide. Professionalism in the logistic solutions we provide.
            </div>

            <div className="mt-10 space-y-5">
                <LinkBtn text='Independent Riders'/>
                <LinkBtn text='Logistic Partners'/>
                <LinkBtn text="Van and Truck Driver's"/>
            </div>

            <div className="text-2xl mt-14 font-medium">Learn more about roadrunner</div>
            <div className="mt-4">
                Learn more about runner in three minutes
            </div>

            <video className="w-full rounded-2xl mt-8" controls>
                <source src={RoadRunnerVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default ContentBody