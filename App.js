// 1) створити інтерфейс на основі цього объекта:
//
// interface ISpace {
//     mission_name: string;
//     launch_date_local: string;
//     launch_site: {
//         site_name_long: string;
//     };
//     links: {
//         article_link: null | string;
//         video_link: string;
//     };
//     rocket: {
//         rocket_name: string;
//         first_stage: {
//             cores: [
//                 {
//                     flight: number;
//                     core: {
//                         reuse_count: number;
//                         status: boolean | unknown;
//                     }
//                 }
//             ]
//         };
//         second_stage: {
//             payloads: [
//                 {
//                     payload_type: string;
//                     payload_mass_kg: number;
//                     payload_mass_lbs: number;
//                 }
//             ]
//         }
//     }
// }
var user = {
    name: 'Max',
    age: 18,
    gender: 'male'
};
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2).age);
