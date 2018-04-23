import hashlib


def md5(fname):
    hash_md5 = hashlib.md5()
    with open(fname, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
        return hash_md5.hexdigest()


def sha1(fname):
    hash_sha1 = hashlib.sha1()
    with open(fname, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_sha1.update(chunk)
        return hash_sha1.hexdigest()


def sha256(fname):
    hash_sha256 = hashlib.sha256()
    with open(fname, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_sha256.update(chunk)
        return hash_sha256.hexdigest()


def sha512(fname):
    hash_sha512 = hashlib.sha512()
    with open(fname, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_sha512.update(chunk)
        return hash_sha512.hexdigest()


a = input('Enter file name/path: ')
print('MD5:', md5(a))
print('SHA1:', sha1(a))
print('SHA256:', sha256(a))
print('SHA512:', sha512(a))
