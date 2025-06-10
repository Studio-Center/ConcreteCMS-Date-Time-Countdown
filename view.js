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
                this.vars.diffDays = Math.round(Math.abs((date - currentDate) / oneDay)) + 1;

                if(date.getHours() - currentDate.getHours()){
                    this.vars.remHours = 24 - currentDate.getHours() + 1;
                    this.vars.diffDays--;
                } else {
                    this.vars.remHours = date.getHours() - currentDate.getHours() + 1;
                }
                if(date.getMinutes() - currentDate.getMinutes()){
                    this.vars.remMinutes = 60 - currentDate.getMinutes() + 1;
                    this.vars.remHours--;
                } else {
                    this.vars.remMinutes = (date.getMinutes() - currentDate.getMinutes()) + 1;
                }   
                if(currentDate.getSeconds() > date.getSeconds()){
                    this.vars.remSeconds = 60 - currentDate.getSeconds() + 1;
                    this.vars.remMinutes--;
                } else {
                    this.vars.remSeconds = (date.getSeconds() - currentDate.getSeconds()) + 1;
                }

                $(counterID + ' .days-cnt').html(this.vars.diffDays);
                $(counterID + ' .hours-cnt').html(this.vars.remHours);
                $(counterID + ' .minutes-cnt').html(this.vars.remMinutes);
                $(counterID + ' .seconds-cnt').html(this.vars.remSeconds);

                setTimeout(this.updateSeconds, 1000);
            }
        },
        updateSeconds: function(){

            if(this.vars.remSeconds == 0){
                this.vars.remSeconds = 60;
                if(this.vars.remMinutes == 0){
                    this.vars.remMinutes = 60;
                    
                    if(this.vars.remHours == 0){
                        this.vars.remHours = 60;
                        this.vars.diffDays--;
                    } else {
                        this.vars.remHours--;
                    }
                    $(counterID + ' .hours-cnt').html(this.vars.remHours);

                } else {
                    this.vars.remMinutes--;
                }
                $(counterID + ' .minutes-cnt').html(this.vars.remMinutes);
            } else {
                this.vars.remSeconds--;
            }

            $(counterID + ' .seconds-cnt').html(this.vars.remSeconds);

            setTimeout(this.updateSeconds, 1000);
        }
    }