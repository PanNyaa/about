window.onload = function() {
    document.getElementById('soundcloud').insertAdjacentHTML('beforeend', '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1338062683&color=%235c84d4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/pan-nyaa" title="pan_nyaa" target="_blank" style="color: #cccccc; text-decoration: none;">pan_nyaa</a> · <a href="https://soundcloud.com/pan-nyaa/sets/eqgze3oqzzsm" title="ぱんにゃあちゃんが作った自作・アレンジ曲まとめプレイリスト" target="_blank" style="color: #cccccc; text-decoration: none;">ぱんにゃあちゃんが作った自作・アレンジ曲まとめプレイリスト</a></div>');
    Particles.init({
      selector: '.background',
      connectParticles: true,
      color:'#98D2EB',
      minDistance:'100',
      sizeVariations:10
    });
  };