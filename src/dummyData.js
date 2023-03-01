import violin from 'assets/images/violin.svg';
import hand from 'assets/images/hand.svg';
export const reviews = [
  {
    id: 1,
    userName: 'Kim',
    userProfileImgPath: violin,
    review:
      'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
    registDate: new Date(),
    starRate: 2.3,
  },
];

export const userProfile = {
  userId: 123,
  name: 'Kim',
  following: 100,
  followers: 120,
  profileImgPath: violin,
  aboutMe:
    'Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More',
};

export const eventList = [
  { id: 1, time: new Date(), title: 'A virtual evening of smooth jazz', img: violin },
  { id: 2, time: new Date(), title: 'Jo malone enven', img: hand },
];
