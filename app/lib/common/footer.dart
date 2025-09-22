import 'package:flutter/material.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF1A3C6E),
      padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 40),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildFooterColumn(context, 'About Us', [
                'Our Story',
                'Careers',
                'Press',
              ]),
              _buildFooterColumn(context, 'Support', [
                'Contact Us',
                'FAQ',
                'Help Center',
              ]),
              _buildFooterColumn(context, 'Legal', [
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
              ]),
            ],
          ),
          const SizedBox(height: 20),
          const Divider(color: Colors.white54),
          const SizedBox(height: 20),
          const Text(
            '© 2025 LooterBank. All Rights Reserved.',
            style: TextStyle(color: Colors.white70),
          ),
        ],
      ),
    );
  }

  Widget _buildFooterColumn(BuildContext context, String title, List<String> items) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),
        const SizedBox(height: 10),
        for (final item in items)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 4.0),
            child: Text(
              item,
              style: const TextStyle(color: Colors.white70),
            ),
          ),
      ],
    );
  }
}