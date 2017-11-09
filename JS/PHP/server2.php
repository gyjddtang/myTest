<?php
    $province=$_REQUEST["province"];
    $cities;
    switch($province){
        case "吉林省":
            $cities="长春市,吉林市,松原市,延边市,四平市";
            break;
        case "辽宁省":
            $cities="沈阳市,大连市,铁岭市,盘锦市,葫芦岛市";
            break;
        case "山东省":
            $cities="青岛市,济南市,威海市,日照市,德州市";
            break;
    }
    echo $cities;
?>