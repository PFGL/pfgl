<?php
/*
 Template Name: New Homepage
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header(); ?>

    <div id="content" class="wrapper">

        <div id="inner-content" class="container">

            <div class="main"  role="main">

                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                    <article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

                        <div id="slider-container-new">

                            <div id="slider" class="nivoSlider">
                                <img src="<?php bloginfo('template_url');?>/images/slider/slide1-thin.jpg" alt="Perspective Financial Group Limited is a leading national IFA consolidator" width="720" height="300" />

                                <img src="<?php bloginfo('template_url');?>/images/slider/slide-umbrella.png" alt="Perspective is one of the fastest growing financial services groups in the UK" width="720" height="300" />

                                <img src="<?php bloginfo('template_url');?>/images/slider/slide3-thin.jpg" alt="Perspective is a national group of quality independent financial advisers" width="720" height="300" />

                                <img src="<?php bloginfo('template_url');?>/images/slider/slide4-thin.jpg" alt="The Perspective proposition blends local autonomy with group support" width="720" height="300" />

                                <img src="<?php bloginfo('template_url');?>/images/slider/slide5-thin.jpg" alt="Perspective offers an exit strategy to allow IFAs to maximise their capital value" width="720" height="300" />
                            </div><!--slider-->

                        </div><!--slider-container-->

                        <div class="entry-content cf" itemprop="articleBody">
                            <?php
                                // the content (pretty self explanatory huh)
                                the_content();
                            ?>
                        </div>

                        <?php if( get_field('feature-box') ): ?>
                            <section class="feature-box" style="color:<?php the_field('text-colour');?>; background-color:<?php the_field('background-colour');?>">
                                <h1 class="feature-box-title section-title"><?php the_field('feature-box-title'); ?></h1>

                                    <div class="entry-content feature-box-content">
                                        <?php the_field ('feature-box-content');?>
                                    </div>
                            </section>
                        <?php endif; ?>

                    </article>

                <?php endwhile; else : ?>

                    <?php get_template_part ('partials/no-post-found');?>

                <?php endif; ?>

            </div>

        <?php get_sidebar(); ?>

        </div>

    </div>

<?php get_footer(); ?>
