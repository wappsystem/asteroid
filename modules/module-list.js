(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    
    m[p+"participant-data"]={url:"$H/m/survey-data.html",Table:"demo-asteroid-partb-screening"
                            /*
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            questionnaire_setup:"online-questionnaire-setup-canact",
                            online_questionnaire:"online-questionnaire"
                            */
    };                                    
    //m[p+"participant-form"]={url:"$H/m/survey-form.html",Table:"canact-survey"},

    m[p+"main-panel"]       ={url:H+"/panels/main.html", };
    m[p+"screening-data"]   ={url:H+"/business/screening/data.html",Table:"demo-asteroid-partb-screening",router:1 };
    m[p+"week-0-panel"]     ={url:H+"/panels/week-0.html" };
    m[p+"ffs-form"]         ={url:H+"/business/quest/ffs-form.html",Table:"demo-asteroid-partb-ffs", task_name:"FFS" };
    m[p+"phq-form"]         ={url:H+"/business/quest/phq-form.html",Table:"demo-asteroid-partb-phq", task_name:"PHQ" };

    /*
    m[p+"roster-data"]      ={url:H+"/business/roster/data.html",       Table:"staff-roster",  form_module:"roster-form"},
    m[p+"roster-form"]      ={url:H+"/business/roster/form.html",       Table:"staff-roster"}
    m[p+"month"]            ={url:H+"/business/calendar/month.html",    Table:"staff-roster","booking":p+"roster-form",router:1};
    m[p+"week"]             ={url:H+"/business/calendar/week.html",     Table:"staff-roster","booking":p+"roster-form","booking2":p+"roster-form-2",router:1};
    m[p+"day"]              ={url:H+"/business/calendar/day.html",      Table:"staff-roster","booking":p+"roster-form",router:1};
    */
})();
