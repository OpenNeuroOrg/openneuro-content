export default [
  {
    faq: 
      'How do I get started?',
    faq_answer:
      'Check out our ' + 
      '[video tutorial](https://www.youtube.com/watch?v=FK_c1x1Pilk).',
  },
  {
    faq: 
      'Is this service free to use?',
    faq_answer: 
      'Yes!',
  },
  {
    faq: 
      'Are there any restrictions on the uploaded data?',
    faq_answer:
      'Yes. By uploading this dataset to OpenNeuro you have to agree to the  following conditions: \n' +
      '* ' +
      'You are the owner of this dataset and have any necessary ethics ' +
      'permissions to share the data publicly.\n' +
      '* ' +
      'This dataset does not include any identifiable personal health ' +
      'information as defined by the Health Insurance Portability and ' +
      'Accountability Act of 1996 (including names, zip codes, dates of ' +
      'birth, acquisition dates, facial features on structural scans, ' +
      'etc.).\n' +
      '* ' +
      'You agree that this dataset will become publicly available ' +
      'under a Creative Commons CC0 license after a grace period ' +
      'of 36 months counted from the first successful snapshot of ' +
      'the dataset.\n' +
      '* ' +
      'This dataset is not subject to GDPR protections.',
  }, 
  {
    faq: 
      'What if I will not be able to publish my paper in 36 months?',
    faq_answer:
      'You can apply for up to two 6-month long extensions of the grace ' +
      'period. To apply please contact support. We encourage you to publish ' +
      'a preprint of your work to reduce the uncertainty of the publishing ' +
      'pipeline.',
  },
  {
    faq:
      'Are there consent form templates we can use in our study?', 
    faq_answer:
      'Yes! We recommend using the Open Brain Consent - ' + 
      '[Ultimate consent form](https://open-brain-consent.readthedocs.io/en/stable/ultimate.html).\n' +
      '* ' +
      'For GDPR protected studies, they have a ' +
      '[Ultimate consent form GDPR edition](https://open-brain-consent.readthedocs.io/en/stable/gdpr/ultimate_gdpr.html).',
  },
  {
    faq:
      'Do I need to format my data in some special way before uploading it to OpenNeuro?',
    faq_answer:
      'Yes! OpenNeuro only accepts data in the Brain Imaging Data Structure ' +
      '(BIDS) format. You can read about it more at ' +
      '[bids.neuroimaging.io](http://bids.neuroimaging.io/). ' +
      'If you have any questions about organizing your data please ' +
      'post them at [neurostars.org](https://neurostars.org/tags/bids).',
  },
  {
    faq:
      'Do I need to remove facial features from structural images before uploading the data?',
    faq_answer:
      'OpenNeuro does not accept datasets that have not been defaced for ' +
      'privacy considerations. Datasets found to not have been defaced will ' +
      'be deleted and the dataset owner is invited to reupload their dataset with the ' +
      'defaced images. The dataset owner will be notified by the OpenNeuro ' +
      'team if an infringement has been detected. ' +
      'The only exception is explicit ' +
      'approval from the study participant(s).\n\n' +
      'We recommend using [pydeface](https://pypi.python.org/pypi/pydeface) to deface your images. ' +
      'In the case that the dataset(s) is cited in publications, please notify the ' +
      'OpenNeuro team and we will direct the DOI and dataset links from the ' +
      'previous dataset to the new dataset. We suggest adding a note to the ' +
      'README of the reuploaded dataset to specify this change.\n\n' +
      'For any questions or concerns please email Franklin: <ffein@stanford.edu>',
  },
  {
    faq:
      'How can I upload data onto OpenNeuro?',
    faq_answer:
      'We offer two options for uploading data onto OpenNeuro. ' +
      'The first is to upload via the web interface. ' +
      'The second is to upload via our [command-line utility tool](cli.openneuro.org)',
  },
]
