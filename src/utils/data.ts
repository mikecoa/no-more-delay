import { ImgPaths } from "./getImg";

type ActivityData = { img: ImgPaths; id: number; name: string; des: string; date: string; cost: string}[]

export const activityData: ActivityData = [
  { id: 1, img: "camping", name: "Camping at Sai Kung", des: "Joining a camping trip at Sai Kung is a fun and exciting way to enjoy nature with like-minded people. With beautiful beaches, clear waters, and plenty of outdoor activities, it's an adventure that you won't want to miss.", date: "27 May 2023", cost: "100" },
  { id: 2, img: "cycling", name: "Cycling to Tung Chung", des:"Cycling to Tung Chung is an exhilarating adventure that allows you to explore the scenic countryside of Hong Kong while staying fit and active. Join a group and make new friends while enjoying the thrill of cycling.", date: "18 Apr 2023", cost: "50" },
  { id: 3, img: "disney", name: "Go to Disneyland", des:"Going to Disneyland is a magical experience that's perfect for all ages. Join a group and make lasting memories with family and friends while experiencing the park's thrilling rides, shows, and attractions.", date: "30 Apr 2023", cost: "300" },
  { id: 4, img: "kayaking", name: "Kayaking at GeoPark", des:"Kayaking at GeoPark is an unforgettable experience that allows you to discover the stunning natural beauty of Hong Kong. Join a group and paddle through breathtaking rock formations and hidden lagoons, while enjoying the great outdoors and staying active.", date: "5 May 2023", cost: "70" },
];
