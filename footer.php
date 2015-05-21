			<footer class="footer" role="contentinfo">

				<div id="inner-footer" class="wrapper">

					<?php if ( wp_is_mobile() ) {}

                        else {

                            get_template_part ('partials/navigation' , 'footer');

                        }

                    ?>

					<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>.</p>

				</div>

			</footer>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
