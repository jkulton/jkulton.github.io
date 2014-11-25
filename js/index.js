$("*").click(function() {
  
//Creates an array with all possible background images:
    var images = ['yP81bVM.jpg', 'cKJnu5h.jpg', 'Lbua6hr.jpg', '5ZAPpHQ.jpg', '7jsohjN.jpg', 'UhNL23H.jpg', 'xHZWycA.jpg', '4d1Rsy7.jpg', 'e1PgVcT.jpg', 'n5uixLZ.jpg', 'pwwEzig.jpg', 'JEwqrQG.jpg', 'ovvXVzY.jpg', 'plFNuGU.jpg', '26ZNnDz.jpg', 's67tiZM.jpg', 'OotXiaz.jpg', 'lHTOyzG.jpg', 'd54zvgz.jpg', 'h7eIyuo.jpg', 'ak2SDXh.jpg', 'U4PtNB5.jpg', 'wEFkkcj.jpg', 'DQ1xZkv.jpg', 'qsPTjwc.jpg', 'gKARK4k.jpg', 'LfJfqQy.jpg', 'W69NvpQ.jpg', 'bNi3W7p.jpg', 'pG4AEPP.jpg', 'EHxj4LZ.jpg', '6bGxy5P.jpg', 'eIbKGB9.jpg', 'XsEhasb.jpg', 'CpFQ274.jpg', 'UU6B7oX.jpg', 'rLQ79az.jpg', 'xLIZq5S.jpg', 'CXCDtXN.jpg', 'dtNZheq.jpg', '1WpgtIZ.jpg', 'XFUUMyR.jpg', '595HjvR.jpg', 'uNA1pu6.jpg', 'yZ1miW5.jpg', 'SQ8zEJ7.jpg', 'ERBBCMO.jpg', 'FIoEBgT.jpg', 'qbAJFUK.jpg', '0UTilom.jpg', 'gQbHAQ8.jpg', '5ItRp5X.jpg', 'pSbHKxf.jpg', 'aujxwu5.jpg', 'GGoKHgP.jpg', '1uedC9o.jpg', 'WgYgabK.jpg', 'jjQInF7.jpg', '0DZ06pq.jpg', 'qkKBYUj.jpg', 'prtg5nh.jpg', 'nPCJrDH.jpg', 'G2bWL1o.jpg', 'RDFmt6I.jpg', 'YMQRLlb.jpg', 'ZYXIHcn.jpg', 'Zie5I0G.jpg', 'ZoDIezo.jpg', 'b644ewo.jpg', 'HZXnyLg.jpg', 'cYt3eN7.jpg', '9uFPwwR.jpg', 'W9YgUU3.jpg', 'jxRjHSZ.jpg', 'WEdFZ2n.jpg', 'KSZgvto.jpg', 'AMVySTR.jpg', 'RbACXe2.jpg', 'N5WYqBW.jpg', 'xXW7hAU.jpg', '48otzBi.jpg', 'E3RIFpl.jpg', 'bdBQcgu.jpg', 'IqiCxND.jpg', 'iszfaOI.jpg', '7g09yDw.jpg', 'fER5weD.jpg', 'ZfoyIIw.jpg', 'I69lcTr.jpg', 'gCxcU1r.jpg', 'EIwTsGy.jpg', 'NaWxDbJ.jpg', 'k9lGNI9.jpg', 'X5xIz07.jpg', 'B0XfRF8.jpg', '5AHEdD0.jpg', '7e7nnqF.jpg', 'fw9dAcQ.jpg', 'WXmuKHL.jpg', 'UAR4E8T.jpg', 'uEiESqI.jpg', '4cf0pAt.jpg', 'WayZ0o5.jpg', 'YjDPdrm.jpg', 'vQKwtmX.jpg', 'wN5Q49y.jpg', 'gAvK1on.jpg', 'AgSJDPh.jpg', 'WIFHty0.jpg', 'HfIY8ot.jpg', 'qDSML6U.jpg', 'uKYbP17.jpg', 'ksldWwu.jpg', 'TBMk9Er.jpg', 'SJmyfRX.jpg', 'WXCM56W.jpg', 'NhYfwRb.jpg', 'HJdBRGz.jpg', 'IQd5xbe.jpg', 'A51pvgx.jpg', 'oAp3GuH.jpg', 'UES9mit.jpg', 's1w9hWy.jpg', '1T6Qy0y.jpg', 'tqiRdce.jpg', 'gfAI62Y.jpg', 'UIIjDls.jpg', 'vL6ILsA.jpg', 'KyhdxcW.jpg', 'uZWGYdv.jpg', 'htmYomp.jpg', 'iAIpC71.jpg', 'VSAPkoF.jpg', 'drNGqYH.jpg', 'qhQxKLw.jpg', '5nUq0lz.jpg', '9IVRKKq.jpg', 'gvjtTkk.jpg', 'Z54dv93.jpg', 'KtDlIJI.jpg', '5nk5Jjr.jpg', 'CdVyrRX.jpg', 'Lc0NiAx.jpg', '825jUor.jpg', 'WuTkQvD.jpg', '2fOpYzH.jpg', 'bLXFRol.jpg', 'RhVG6Q7.jpg', 'I4UjLjy.jpg', 'ggHazHT.jpg'];

//Creates an array with all possible font families, added multiple built-in fonts for the sake of pageload:
    var fonts = ['Arvo', 'Lobster', 'Radley', 'Poiret One', 'Shadows Into Light', 'Josefin Slab', 'Indie Flower', 'Pacifico', 'Coming Soon', 'Noticia Text', 'Helvetica', 'Comic Sans MS', 'Impact', 'Trebuchet MS', 'Verdana', 'Courier New', 'Lucida Console', 'Tahoma', 'Georgia', 'Copperplate'];

//Removes "Tap to try again" message:
    $('.tapMe').empty();
  
//Removes background color to prevent color flashing between images (Chrome issue):
    $('.wrap').css({'background-color':'transparent'});

//Randomly selects and applies background image from array
    $('.wrap').css({'background-image': 'url(http://i.imgur.com/' + images[Math.floor(Math.random() * images.length)] + ')'});
  
//Randomly selects and applies font family from array:
    $('.no').css({'font-family':fonts[Math.floor(Math.random() * fonts.length)]});
  
// Fin.
});
