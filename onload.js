window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color:'#98D2EB',
    minDistance:'100',
    sizeVariations:10
  });
  document.getElementById('soundcloud').insertAdjacentHTML('beforeend', '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1338062683&color=%235c84d4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/pan-nyaa" title="pan_nyaa" target="_blank" style="color: #cccccc; text-decoration: none;">pan_nyaa</a> · <a href="https://soundcloud.com/pan-nyaa/sets/eqgze3oqzzsm" title="ぱんにゃあちゃんが作った自作・アレンジ曲まとめプレイリスト" target="_blank" style="color: #cccccc; text-decoration: none;">ぱんにゃあちゃんが作った自作・アレンジ曲まとめプレイリスト</a></div>');
  document.getElementById('note.com.frame').insertAdjacentHTML('beforeend', '<iframe src="https://pannyaa.github.io/rss/" width="100%" height="600" frameborder="0" target="_blank" rel="noreferrer noopener"></iframe>');
};