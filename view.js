let counter = {
        vars: {
            diffDays: 0,
            remHours: 0,
            remMinutes: 0,
            remSeconds: 0,
        },
        initCounter: function(){

            if(date < currentDate){
                $(counterID).html('Event has passed. Please come back for future updates.');
            } else {
                counter.vars.diffDays = Math.round(Math.abs((date - currentDate) / oneDay)) + 1;

                if(date.getHours() - currentDate.getHours()){
                    counter.vars.remHours = 24 - currentDate.getHours() + 1;
                    counter.vars.diffDays--;
                } else {
                    counter.vars.remHours = date.getHours() - currentDate.getHours() + 1;
                }
                if(date.getMinutes() - currentDate.getMinutes()){
                    counter.vars.remMinutes = 60 - currentDate.getMinutes() + 1;
                    counter.vars.remHours--;
                } else {
                    counter.vars.remMinutes = (date.getMinutes() - currentDate.getMinutes()) + 1;
                }   
                if(currentDate.getSeconds() > date.getSeconds()){
                    counter.vars.remSeconds = 60 - currentDate.getSeconds() + 1;
                    counter.vars.remMinutes--;
                } else {
                    counter.vars.remSeconds = (date.getSeconds() - currentDate.getSeconds()) + 1;
                }

                $(counterID + ' .days-cnt').html(counter.vars.diffDays);
                $(counterID + ' .hours-cnt').html(counter.vars.remHours);
                $(counterID + ' .minutes-cnt').html(counter.vars.remMinutes);
                $(counterID + ' .seconds-cnt').html(counter.vars.remSeconds);

                setTimeout(counter.updateSeconds, 1000);
            }
        },
        updateSeconds: function(){

            if(counter.vars.remSeconds == 0){
                counter.vars.remSeconds = 60;
                if(counter.vars.remMinutes == 0){
                    counter.vars.remMinutes = 60;
                    
                    if(counter.vars.remHours == 0){
                        counter.vars.remHours = 60;
                        counter.vars.diffDays--;
                    } else {
                        counter.vars.remHours--;
                    }
                    $(counterID + ' .hours-cnt').html(counter.vars.remHours);

                } else {
                    counter.vars.remMinutes--;
                }
                $(counterID + ' .minutes-cnt').html(counter.vars.remMinutes);
            } else {
                counter.vars.remSeconds--;
            }

            $(counterID + ' .seconds-cnt').html(counter.vars.remSeconds);

            setTimeout(counter.updateSeconds, 1000);
        }
    }