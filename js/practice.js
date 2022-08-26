function feetToInch(feet) {
    return feet * 12;
}
function centimeterToMeter(cm) {
    let meter = cm / 100;
    return meter;
}
function paperRequirements(q1, q2, q3) {
    const paperFor1stBook = 100;
    const paperFor2ndtBook = 200;
    const paperFor3rdtBook = 300;
    let totalPaperRequired = paperFor1stBook * q1 + paperFor2ndtBook * q2 + paperFor3rdtBook * q3;
    return totalPaperRequired;
}
function bestFriend(friendList) {
    let friend = friendList[0];
    for (let i = 0; i <= (friendList.length - 1); i++) {
        if (friendList[i].length > friendList[0].length) {
            friend = friendList[i];
        }
    }
    return friend;
}
function returnPositive(numArray) {
    let postiveArray = [];
    // console.log(numArray);
    for (let i = 0; i <= (numArray.length); i++) {
        // console.log(numArray[i])
        if (numArray[i] > 0) {
            postiveArray.push(numArray[i]);
        }
        else if (numArray[i] < 0) {
            return postiveArray
        }
    }
}
function main() {
    console.log('12 feet in inch = ', feetToInch(12));
    console.log('1300 cm in meter = ', centimeterToMeter(130
    ));
    console.log('Total paper required ', paperRequirements(1, 1, 1));
    const myFriends = ['rahim', 'karim', 'wahidul', 'sumi', 'Kabir'];
    console.log('My best friend : ', bestFriend(myFriends));
    const numArray = [43, 45, 56, -67, -65, 12, 49];
    console.log('Positive Array ', returnPositive(numArray));
}
main();