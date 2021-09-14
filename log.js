//Log de users
const usersLogs = [
    "user1;time1;page_1",
    "user1;time2;page_2",
    "user1;time3;page_3",
    "user1;time4;page_4",
    "user1;time4;page_5",
    "user2;time5;page_1",
    "user2;time6;page_2",
    "user2;time7;page_3",
    "user3;time8;page_1",
    "user3;time9;page_5",
    "user3;time10;page_6",
    "user4;time11;page_7",
    "user4;time12;page_8",
    "user4;time13;page_9"
    
];

const setUserActivity =(usersLogs) =>{
    const activity = [];

    for (let i = 0; i < usersLogs.length; i++) {
        const currentUser = usersLogs[i].split(';')[0];
        const currentPage = usersLogs[i].split(';')[2];

        const prevUser = i !== 0 ? usersLogs[i-1].split(';')[0] : null; 

        
        if (currentUser !== prevUser) { 
            const userObject = { user: currentUser, pages: [currentPage] };
            activity.push(userObject); 
        } else {
            for (let j = 0; j < activity.length; j++) {
                const user = activity[j];
                if (user.user === currentUser)
                    user.pages.push(currentPage);
                }
            }    
    }
    return activity;
 }; 
   

const setTriplets = (activity) => {
    const triplets = [];
  
    for (let i = 0; i < activity.length; i++) {
      const userPages = activity[i].pages;
    
      let j = 0;
      let triplet = '';
      let c = 1;
      let x = userPages.length - 1;
  
      while (j < userPages.length) {
        const page = userPages[j];

        if (c <= 3) {
          triplet += c !== 3 ? page + ',' : page;
          
          if (c === 3) {
            triplets.push(triplet);
            triplet = '';
            c = 1;
            j = userPages.length - x;
            x--;
          }
          else { 
            c++;
            j++;
          }
        }
      }
    }
    return triplets;
  };
 
  const usersActivity = setUserActivity(usersLogs);
  console.log(usersActivity);
  const triplets = setTriplets(usersActivity);
  console.log(triplets);

 