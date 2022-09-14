var lg = (m)=>console.log(m)

var pubsub ={};

(function(q){
    var topics={};
    var subUid = -1;

    q.publish = function(topic,args){
        if(! topics[topic]){
            return false;
        }
        var subscribers = topics[topic];
        var len = subscribers ? subscribers.length:0;

        while(len--){
            subscribers[len].func(topic,args);
        }

        return this;
    };

    q.subscribe = function(topic,func){
        if(! topics[topic]){
            topics[topic] =[];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token:token,
            func:func
        })
    };

    Array.prototype.splice()

    q.unsubscribe= function(token){
        for(var m in topics){
            if(topics[m]){
                for (var i=0,j = topics[m].length;i<j;i++){
                    if(topics[m][i].token === token){
                        topics[m].splice(i,1)
                        return token;
                    }
                }
            }
        }
        return this;
    };
})(pubsub)

lg(Object.keys(pubsub))

/**
 * Demo1: 
 */

var grid ={
    refreshData:function(){
        lg('retrieved latest data from data cache')
        lg('updated grid component')
    },
    updateCounter:function(timestamp){
        lg('data last updated at:' +timestamp)
    },
    addEntry:function(data){
        if(data != undefined){
            lg('entry:'+ data.title +' Changenet / %'+ data.changenet)
        }
    }
}

var gridUpdate= function(topics,data){
    grid.refreshData();
    grid.addEntry(data)
    grid.updateCounter(data.timestamp);
}

var dataSubscription = pubsub.subscribe('dataUpdated',gridUpdate)

pubsub.publish('dataupdated','new sotck data available!')
pubsub.publish('dataupdated',{
    title:'Dell',
    changenet:10,
    percentage:20,
    timestamp:'17:35:16'
})



function getCurrentTime(){
    var date = new Date();
    var m = date.getMonth+1;
    var d = date.getDate();
    var y = date.getFullYear();
    var t = date.toLocaleTimeString().toLowerCase();

    return (m+'/'+d+'/'+y+' '+t);
}

