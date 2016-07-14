<?php
/*
 Template Name: Group
*/
?>

<?php get_header(); ?>

			<div id="content" class="wrapper">

				<div id="inner-content" class="container">

						<div id="main" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

                                <header class="article-header cf">

                                  <h1 class="entry-title page-title" itemprop="headline">
                                     <?php the_title(); ?>
                                  </h1>

                                </header> <?php // end article header ?>

<div class="entry-content cf" itemprop="articleBody">
                                    <div class="ifa-content">
                                        <?php the_content(); ?>
                                    </div>

				        <div class="ifa-map">
                             <a id="rutherford-wilkinson" onclick="selectThis('rutherford-wilkinson')" href="javascript:void(0);" class="bullet preview">Rutherford Wilkinson>
                                <img src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/RWltd_chartered-300x148.jpg" class="map-logo" id="map-logo-rutherford">
                            </a>

                            <a id="harrogate-independent"  onclick="selectThis('harrogate-independent')" href="javascript:void(0);" class="bullet preview">Harrogate Independent Financial Services
                                <img class="map-logo" id="map-logo-harrogate" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/Harrogate-logo-r-on-w-300x57.jpg" alt="Print">
                            </a>

                            <a id="multiplex"  onclick="selectThis('multiplex')" href="javascript:void(0);" class="bullet preview">Multiplex
                                <img class="map-logo" id="map-logo-multiplex" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/multiplex-logo-300x86.jpg" alt="multiplex logo">
                            </a>

                            <a id="perspective-group" onclick="selectThis('perspective-group')" href="javascript:void(0);" class="bullet preview">Perspective Group

                                <img class="map-logo" id="map-logo-group" src="http://www.pfgl.co.uk/wp-content/themes/pfgl/library/images/logo.png" alt="Perspective Financial Group Limited">
                            </a>
                            <a id="warnes-anderton" onclick="selectThis('warnes-anderton')"  href="javascript:void(0);" class="bullet preview">Warnes Anderton
                                <img class="map-logo" id="map-logo-warnes" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/WA-logo-white-300x48.jpg" alt="Print">
                            </a>

                            <a id="cambridge-investments" onclick="selectThis('cambridge-investments')"  href="javascript:void(0);" class="bullet preview">Cambridge Investments Limited
                                <img class="map-logo" id="map-logo-cambridge" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/CIL_logo-300x87.jpg" alt="CIL_logo">
                            </a>

                            <a id="applewood1" onclick="selectThis('applewood1')"  href="javascript:void(0);" class="bullet preview">Applewood Wealth Management Ltd

                                <img class="map-logo" id="map-logo-apple-1" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/Applewood-logo-272x300.jpg" alt="pauls new">
                            </a>

                            <a id="applewood2" onclick="selectThis('applewood2')"  href="javascript:void(0);" class="bullet preview">Applewood Wealth Management Ltd

                                <img class="map-logo" id="map-logo-apple-2" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/Applewood-logo-272x300.jpg" alt="pauls new">
                            </a>

                            <a id="wingham-wyatt" onclick="selectThis('wingham-wyatt')" href="javascript:void(0);" class="bullet preview">Wingham Wyatt Financial Services Ltd

                                <img class="map-logo" id="map-logo-wingham" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/WW-300x163.jpg" alt="Microsoft Word - WWDoc Logo _2_">
                            </a>

                            <a id="perspective-financial" onclick="selectThis('perspective-financial')"  href="javascript:void(0);" class="bullet preview">Perspective Financial Management Ltd
                                <img class="map-logo" id="map-logo-pfm" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/PWM-logo-white-300x61.jpg" alt="Print" >
                            </a>

                            <a id="chessman-partners" onclick="selectThis('chessman-partners')"  href="javascript:void(0);" class="bullet preview">Chessman &amp; Partners Ltd
                                <img class="map-logo" id="map-logo-chess" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/CHESSMAN-logo-300x83.gif" alt="CHESSMAN-logo">
                            </a>

                            <a id="pims" onclick="selectThis('pims')"  href="javascript:void(0);" class="bullet preview">Professional Investment Management Services (Maidstone) Ltd
                                <img class="map-logo" id="map-logo-pims" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/PIMS-Chartered-Financial-Planners-300x130.jpg" alt="PIMS Chartered Financial Planners">
                            </a>

                            <a id="platinum-portfolios" onclick="selectThis('platinum-portfolios')"  href="javascript:void(0);" class="bullet preview">Platinum Portfolios
                                <img class="map-logo" id="map-logo-platinum" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/Platinum-logo2-251x300.jpg" alt="Platinum logo.indd">
                            </a>

                            <a id="equilibrium" onclick="selectThis('equilibrium')" href="javascript:void(0);" class="bullet preview">Equilibrium Wealth Management Limited
                                <img class="map-logo" id="map-logo-equi" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/EWM_logosmall1-300x170.jpg" alt="EWM_logo(small)1">
                            </a>

                            <a id="leedham" onclick="selectThis('leedham')" href="javascript:void(0);" class="bullet preview">Leedham Independent Financial Advisers Limited
                                <img class="map-logo" id="map-logo-leedham" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/Leedham_logo-300x81.jpg" alt="LH:Layout 1">
                            </a>

                            <a id="austyn-james" onclick="selectThis('austyn-james')" href="javascript:void(0);" class="bullet preview">Austyn James Consulting Limited
                                <img class="map-logo" id="map-logo-aj" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/AJC_logo_Blue_Horizontal_Transparent_April-2016-300x111.png" alt="AJC_logo_Blue_Horizontal_Transparent_April-2016">
                            </a>

                            <a id="mcgrath-rathbone" onclick="selectThis('mcgrath-rathbone')" href="javascript:void(0);" class="bullet preview">McGrath Rathbone Limited

                                <img class="map-logo" id="map-logo-mrifa" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/McGrath_Rathbone-300x72.jpg" alt="JO7-0632 layout">
                            </a>

                            <a id="shirebrook" onclick="selectThis('shirebrook')" href="javascript:void(0);" class="bullet preview">Shirebrook Wealth Management Limited
                                <img class="map-logo" id="map-logo-shirebrook" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/ShirebrookLogo-300x102.gif" alt="ShirebrookLogo">
                            </a>

                            <a id="ad-valorem" onclick="selectThis('ad-valorem')" href="javascript:void(0);" class="bullet preview">Ad Valorem Wealth Management Solutions Limited
                                <img class="map-logo" id="map-logo-ad" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/AdValorem-Logo.png" alt="AdValorem-Logo" width="220" height="55">
                            </a>

                            <a id="keypi" onclick="selectThis('keypi')" href="javascript:void(0);" class="bullet preview">Key Pensions &amp; Investments Limited
                                <img class="map-logo" id="map-logo-key" src="http://www.pfgl.co.uk/corporate-solutions/files/2016/02/Key_logo_final-300x41.png" alt="Key_logo_final">
                            </a>
		                  </div><!--ifa-map-->
                        </div>

                                <footer class="article-footer">

                                </footer> <?php // end article footer ?>

							</article>

							<?php endwhile; else : ?>

                                <?php get_template_part ('partials/no-post-found');?>

							<?php endif; ?>

						</div>

						<?php get_sidebar(); ?>

				</div>

			</div>

<?php get_footer(); ?>
