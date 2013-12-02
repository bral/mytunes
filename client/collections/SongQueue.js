// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  model: MyTunes.Models.SongModel,

  initialize: function(){
    this.on('add', function(){
      if(this.length > 1) {
        this.add();
        return;
      }
      this.playFirst();
    }),

    this.on('ended', function(){
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }),

    this.on('dequeue', function(){
      this.remove();
    })
  },

  // add: function(songData){
  //   if (this.length === 0){
  //     this.trigger('enqueue', songData);
  //     this.playFirst();
  //   }

  //   if (this.length > 0){
  //     this.trigger('enqueue', songData);
  //   }
  // },

  playFirst: function(){
    this.at(0).play();
  }

});
