from setuptools import setup, find_packages

setup(
    name='apiverve_wordstonumbers',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Words to Numbers converts spelled-out number phrases into numeric digits. Pass written words to receive the calculated number, formatted English notation, and total digit counts.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/wordstonumbers?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
