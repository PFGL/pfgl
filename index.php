<?php get_header(); ?>

    <div id="content" class="wrapper">

        <div id="inner-content" class="container">

            <div class="main" role="main">

                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                    <?php get_template_part ('post-formats/format', get_post_format() );?>

                <?php endwhile; ?>

                    <?php bones_page_navi(); ?>

                <?php else : ?>

                    <?php get_template_part ('partials/no-post-found');?>

                <?php endif; ?>

            </div>

            <?php get_sidebar(); ?>

        </div>

    </div>

<?php get_footer(); ?>
