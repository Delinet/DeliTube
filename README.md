DeliTube
========

A javascript snippet to retrieve video ID from Youtube URL


===========================================================

the snippet work with this URL:

http://www.youtube.com/watch?v=MwdswCnv3rw&feature=c4-overview&list=UUJwqeQPE3g6Bd-_HBcEKPkA
in this case getVideoID retrieve MwdswCnv3rw

http://youtu.be/MwdswCnv3rw
in this case getVideoID retrieve MwdswCnv3rw

http://www.youtube.com/watch?v=sC0Grj_y0P8&list=
in this case getVideoID retrieve sC0Grj_y0P8

www.youtube.com/watch?v=sC0Grj_y0P8&list=
in this case getVideoID retrieve sC0Grj_y0P8

https://youtube.googleapis.com/v/sC0Grj_y0P8
in this case getVideoID retrieve sC0Grj_y0P8

https://www.youtube.com/embed/sC0Grj_y0P8
in this case getVideoID retrieve sC0Grj_y0P8


