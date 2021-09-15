<template>
   <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>

                            <router-link to="/home" class="nav-link" exact>
                               <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </router-link>

                            <router-link to="/home/categories" class="nav-link" exact v-if="$store.state.profile.role === 'administrator'">
                               <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Categories
                            </router-link>

                            <router-link to="/home/products" class="nav-link" exact v-if="$store.state.profile.role === 'author'">
                               <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Products
                            </router-link>
                            
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
    </div>
</template>