export const formInfo ={
    1:{title:"Welcome! First things first...", 
        subtitle:"You can always change them later." ,
        extract:{type:"input",
        feilds:[{label:"Full Name",name: "fullName", placeholder:"Steve Jobs", value:""}, 
            {label:"Display Name",name:"displayName", placeholder:"Steve", value:""}]}},

    2:{title:"Let's set up a home for all your work", 
        subtitle:"You can always create another workspace later." , 
        extract:{type:"input",
        feilds:[{label:"Workspace Name",name: "wrokspaceName", placeholder:"Eden", value:""}, 
            {label:"Workspace URL", span:"www.eden.com/",name: "workspaceURL", placeholder:"Example", value:"" , style:"rounded-none rounded-r-lg block border border-gray-300 text-gray-900 text-sm block p-2.5"}]}},
        
    3:{title:"How are you planning to use Eden?", 
        subtitle:"We'll streamline your setup experience accordingly" , 
        extract:{type:"div",
            feilds:[{title:"For Myself", subtitle:"Write better. Think more clearly. Stay organised", span:"<i class='fa-regular fa-person-simple'></i>", value:""}, {title:"With My Team", subtitle:"Wikis, docs, tasks & projects,all in one place.", span:'<i class="fa-regular fa-people-group"></i>', value:""}]}},
    
    4:{title:"Congratulations,", subtitle:"You have completed onboarding, you can start using the Eden"}
}


