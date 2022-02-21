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
    m[p+"screening-data"]   ={url:H+"/form-grid/screening/eligibility-data.html",Table:"demo-asteroid-partb-screening",router:1 };
    m[p+"week-0-panel"]     ={url:H+"/panels/week-0.html",router:1 };
    m[p+"ffs-form"]         ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs", task_name:"FFS" };
    m[p+"phq-form"]         ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq", task_name:"PHQ" };

    /*
    m[p+"roster-data"]      ={url:H+"/form-grid/roster/data.html",       Table:"staff-roster",  form_module:"roster-form"},
    m[p+"roster-form"]      ={url:H+"/form-grid/roster/form.html",       Table:"staff-roster"}
    m[p+"month"]            ={url:H+"/form-grid/calendar/month.html",    Table:"staff-roster","booking":p+"roster-form",router:1};
    m[p+"week"]             ={url:H+"/form-grid/calendar/week.html",     Table:"staff-roster","booking":p+"roster-form","booking2":p+"roster-form-2",router:1};
    m[p+"day"]              ={url:H+"/form-grid/calendar/day.html",      Table:"staff-roster","booking":p+"roster-form",router:1};
    */
})();
