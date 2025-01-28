<div class="container-fluid p-0">
    <nav id="my-nav" class="navbar fixed-top navbar-expand-lg navbar-light font-weight-bold">
        <a class="navbar-brand text-main" href="index.php">
            <!-- <img itemprop="image" src="images/logo-trans.png" class="h-auto mw-10" alt="Demo Printz"
                title="Demo Printz"> -->
            Demo <em class="text-white">Printz</em>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
            <span class="bi bi-list nav-icon text-nav-main"></span>
        </button>
        <div id="myNavbar" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto text-center">
                <li class="nav-item px-2 <?php if ($page == "home") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="index.php">Home</a>
                </li>
                <li class="nav-item px-2 <?php if ($page == "about") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="about.php">About</a>
                </li>
                <!-- services dropdown -->
                <li class="nav-item px-2 dropdown <?php if ($page == "services") {
                    echo "active";
                } ?>">
                    <a class="nav-link dropdown-toggle" href="services.php" role="button" data-toggle="dropdown"
                        aria-expanded="false">
                        Services
                    </a>
                    <div class="dropdown-menu">
                        <a target="_blank" class="dropdown-item" href="services.php#business-cards">Business Card
                            Printing</a>
                        <a target="_blank" class="dropdown-item" href="services.php#brouchures">Brochures Designing &
                            Printing</a>
                        <a target="_blank" class="dropdown-item" href="services.php">Flyers & Notice Printing</a>
                        <a target="_blank" class="dropdown-item" href="services.php">Posters Printing</a>
                        <a target="_blank" class="dropdown-item" href="services.php">Corrugation Box Printing</a>
                        <a target="_blank" class="dropdown-item" href="services.php">Calendar Printing</a>
                        <!-- <div class="dropdown-divider"></div> -->

                    </div>
                </li>
                <li class="nav-item px-2 <?php if ($page == "gallery") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="gallery.php">Gallery</a>
                </li>
                <li class="nav-item px-3 <?php if ($page == "contact") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="contact.php">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</div>