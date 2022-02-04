<?php
    class dashboard {
        public function __construct()
        {
            global $keys;
            $this -> $keys ['header'] = $this -> includeHTML ('../htmls/head.html');
            $this -> $keys ['body'] = $this -> includeHTML ('../htmls/body.html');
            $this -> $keys ['navbar'] =$this -> includeHTML ('..htmls/navbar.html');
        }
    }
?>