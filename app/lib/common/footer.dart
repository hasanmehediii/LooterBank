import 'package:flutter/material.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black87,
      padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 20),
      child: Column(
        children: [
          // Top Sections
          Wrap(
            spacing: 40,
            runSpacing: 40,
            alignment: WrapAlignment.center,
            children: const [
              _FooterSection(
                title: "About Us",
                text:
                    "LooterBank is a leading financial institution committed to providing the best banking services to our customers.",
              ),
              _FooterSection(
                title: "Quick Links",
                text: "About Us\nContact\nFAQ",
              ),
              _FooterSection(
                title: "Contact Us",
                text: "Email: support@looterbank.com\nPhone: (123) 456-7890",
              ),
              _FooterSection(
                title: "Follow Us",
                text: "Facebook • Twitter • LinkedIn",
              ),
            ],
          ),

          const SizedBox(height: 30),
          const Divider(color: Colors.white30),
          const SizedBox(height: 10),

          // Bottom Section
          Text(
            "© 2025 LooterBank. All rights reserved.",
            style: Theme.of(
              context,
            ).textTheme.bodySmall?.copyWith(color: Colors.white70),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}

class _FooterSection extends StatelessWidget {
  final String title;
  final String text;

  const _FooterSection({required this.title, required this.text});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 240,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 12),
          Text(
            text,
            style: Theme.of(
              context,
            ).textTheme.bodyMedium?.copyWith(color: Colors.white70),
          ),
        ],
      ),
    );
  }
}
