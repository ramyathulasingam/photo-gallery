var PhotoGallery = React.createClass({

 componentDidMount: function() {
   this.startSlide();
   setInterval(this.displayState, 50000);
 },

  displayState: function(){
    var self = this
    $.ajax({
      url: '/large_image',
      type: 'GET',
      success:function(data){
        if (typeof data[0] !== 'undefined') {
         var check =  _.difference(_.pluck(data, "id"), _.pluck(this.state.data, "id"))
          console.log(check);
          if (typeof check[0] !== 'undefined') {
            var newData = self.state.data.concat(data);

            var reversed = newData.reverse();
            var uniqueList = _.uniq(reversed, function (item, key, id) {return item.id; });
            self.replaceState({data: uniqueList});
            self.startSlide();
          }

        }

      }.bind(this)
    });

  },

  getInitialState: function() {
    return ({
      data: this.props.flickrPhotos
   });
  },

  startSlide: function(){
    jQuery('.photosList').cycle({fx: 'fadeZoom', delay: -3000})
  },

  render: function(){
    return(
       <div> <PhotoList data={this.state.data} />
       </div>
    );
  }
});

var PhotoList = React.createClass({
  render: function() {
    var image = this.props.data.map(function(element, i) {
      return (
         <SinglePhoto imageURL={element["url"]} key={i}/>
      );

    });
    return (
      <div className="photosList">
        {image}
      </div>
     );
   }
});

var SinglePhoto = React.createClass({
  render: function() {
    return (
        <img className="photo fit img-responsive" src={this.props.imageURL}/>
    );
  }
});





