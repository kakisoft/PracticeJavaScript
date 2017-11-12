<?php

//echo "hi! " . $_GET['name'];
echo htmlspecialchars("hi! " . $_GET['name'], ENT_QUOTES, "utf-8");
