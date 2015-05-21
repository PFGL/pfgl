<?php
/*
 Template Name: New Homepage
 *
*/
?>

<?php get_header(); ?>

    <div id="content" class="wrapper">

        <div id="inner-content" class="container">

            <div class="main"  role="main">

                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                    <article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

                        <div class="slider-container">

                            <div id="slider" class="nivoSlider">
                                <img src="<?php echo get_template_directory_uri(); ?>/library/images/slide-1.jpg" alt="Perspective Financial Group Limited is a leading national IFA consolidator" width="720" height="300" />

                                <img src="<?php echo get_template_directory_uri(); ?>/library/images/slide-2.png" alt="Perspective is one of the fastest growing financial services groups in the UK" width="720" height="300" />

                                <img src="<?php echo get_template_directory_uri(); ?>/library/images/slide-3.jpg" alt="Perspective is a national group of quality independent financial advisers" width="720" height="300" />

                                <img src="<?php echo get_template_directory_uri(); ?>/library/images/slide-4.jpg" alt="The Perspective proposition blends local autonomy with group support" width="720" height="300" />

                                <img src="<?php echo get_template_directory_uri(); ?>/library/images/slide-5.jpg" alt="Perspective offers an exit strategy to allow IFAs to maximise their capital value" width="720" height="300" />
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
